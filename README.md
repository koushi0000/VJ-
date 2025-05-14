# VJ-
VoxelMAPからjourneyMapへ座標を変換するツールです。

VoxelMAPからjourneyMap変換ツール

大前提
自己責任で行ってね
バックアップしましょう

起動構成のフォルダ階層にmods/VoxelMAPワールド名（マルチだとIP).pointsと
起動構成のフォルダ階層にjourneymap/data/sp/ワールド名/waypointsフォルダーが
あることを確認してください。

手順
pointsフォルダーの中のファイルをコピーして拡張子を txt　にします。

メモ帳で開き、名前つけて保存で input.txtとつけて
エンコードをUTF-8にします。(※文字化けします。絶対行ってね）

input.txtをVJ座標変換のワールドに貼り付ける、または上書きします。

その状態でStart.batをクリックします。数秒後
output_filesにJSONファイルが生成されているので
全て必要ならJSONをコピーして
journeymap/data/sp/ワールド名/waypointsの中に入れてください。
マインクラフト再起動後適応されます。

作成｜更新

2025/05/14 作成

作成者　Koushi|高坂詩音
