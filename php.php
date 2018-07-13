<?php

// 変数の初期化
$sql = null;
$res = null;
$dbh = null;

try {
	// DBへ接続
	$dbh = new PDO("mysql:host=https://gai1219.000webhostapp.com/; dbname=id6248481_1; charset=utf8", 'id6248481_gasdata', 'gai1219');

	// SQL作成
	$sql = "SELECT *";

	// SQL実行
	$res = $dbh->query($sql);

	// 取得したデータを出力
	echo res;

} catch(PDOException $e) {
	echo $e->getMessage();
	die();
}

// 接続を閉じる
$dbh = null;
?>