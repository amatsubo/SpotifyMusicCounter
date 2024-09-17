"use strict";
// 各種要素取得
const importJsonButton = document.getElementById('importJsonButton');
const calcButton = document.getElementById('calcButton');
// JSON取り込みボタン押下イベント
importJsonButton.addEventListener('click', function () {
    ImportJson();
});
// 算出ボタン押下イベント
calcButton.addEventListener('click', function () {
    MusicCount();
});
// JSON処理
function ImportJson() {
    alert('JSON取り込みボタンがクリックされました');
}
// 算出処理
function MusicCount() {
    alert('算出ボタンがクリックされました');
}
