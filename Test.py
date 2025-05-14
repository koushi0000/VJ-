import json

def convert_txt_to_json(txt_file_path):
    # テキストファイルを開く (Shift-JISで読み込む)
    with open(txt_file_path, 'r', encoding='shift-jis') as file:
        content = file.read()
    
    # テキストのパース
    data = {}
    for item in content.split(','):
        key, value = item.split(':')
        key = key.strip()
        value = value.strip().rstrip('#')
        
        if key == "enabled":
            data[key] = value.lower() == "true"
        elif key in ["red", "green", "blue"]:
            data[key] = float(value)
        elif key in ["x", "y", "z", "dimensions"]:
            data[key] = int(value) if key != "dimensions" else [int(value)]
        else:
            data[key] = value

    # JSONの作成
    json_data = {
        "id": f"{data['x']}, {data['y']}_{data['x']},{data['z']},{data['y']}",
        "name": data['name'],
        "icon": "waypoint-normal.png",
        "x": data['x'],
        "y": data['y'],
        "z": data['z'],
        "r": int(data['red'] * 255),
        "g": int(data['green'] * 255),
        "b": int(data['blue'] * 255),
        "enable": data['enabled'],
        "type": "Normal",
        "origin": "JourneyMap",
        "dimensions": data['dimensions']
    }

    return json.dumps(json_data, ensure_ascii=False, indent=4)

# 例: 使用方法
txt_file_path = 'input.txt'  # 実際のtxtファイルのパスを指定
json_output = convert_txt_to_json(txt_file_path)
print(json_output)
