<?php
// Inicio de session.
session_start();

// Requerir instacia de Wordpress.
require_once '../../vendor/autoload.php';

// Instancia de main.
class main {

	function error404(){
		header("Status: 404 Not Found",true);
		header('HTTP/1.0 404 Not Found',true);
		header('Conection: close',true);
		die;
	}

}

$main = new main();

// Instancia de Slim Framework.
$app = new \Slim\App;

// Instancia de las base de datos Slim.
$dbWeb  = new \Slim\PDO\Database('mysql:host=localhost;dbname=test;charset=utf8','test','test');
$dbLeg  = new \Slim\PDO\Database('mysql:host=localhost;dbname=testdp;charset=utf8','test','test');