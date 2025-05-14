const fs = require('fs');
const readline = require('readline');
const path = require('path');

// 入力ファイルのパスと出力フォルダのパス
const inputFilePath = path.join(__dirname, 'input.txt');
const outputDir = path.join(__dirname, 'output_files');

// 出力フォルダが存在しない場合は作成
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 入力ファイルを読み込む
const rl = readline.createInterface({
  input: fs.createReadStream(inputFilePath, { encoding: 'utf-8' }), // UTF-8エンコーディングで読み込み
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  const match = line.match(/name:(.*),x:(-?\d+),z:(-?\d+),y:(-?\d+),enabled:(true|false),red:(.*?),green:(.*?),blue:(.*?),suffix:(.*?),world:(.*?),dimensions:(\d+)/);
  
  if (match) {
    const [_, name, x, z, y, enabled, red, green, blue, suffix, world, dimensions] = match;
    
    // JSONデータに変換
    const jsonOutput = {
      id: `${x}, ${z}_${y},${x},${z}`,
      name: name.trim(),
      icon: "waypoint-normal.png",
      x: parseInt(x),
      y: parseInt(y),
      z: parseInt(z),
      r: Math.round(parseFloat(red) * 255),
      g: Math.round(parseFloat(green) * 255),
      b: Math.round(parseFloat(blue) * 255),
      enable: enabled === 'true',
      type: "Normal",
      origin: "JourneyMap",
      dimensions: [parseInt(dimensions)]
    };

    // ファイル名としてIDを使用し、個別にJSONファイルを出力
    const fileName = `${x}, ${z}_${y},${x},${z}.json`;
    const filePath = path.join(outputDir, fileName);

    // ファイルに書き込む（エンコーディングをUTF-8に指定）
    fs.writeFileSync(filePath, JSON.stringify(jsonOutput, null, 2), 'utf8');
    console.log(`ファイルが作成されました: ${filePath}`);
  }
});
