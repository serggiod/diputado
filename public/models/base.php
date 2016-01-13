<?php

// Autocarga de las clases composer.
require '../vendor/autoload.php';

// Instancia de una aplicacion Slim.
$app = new \Slim\Slim(array('templates.path' => __DIR__.'/views'));

// Instancia de las base de datos Slim.
$dbWeb  = new \Slim\PDO\Database('mysql:host=localhost;dbname=test;charset=utf8','test','test');
$dbDip  = new \Slim\PDO\Database('mysql:host=localhost;dbname=testdp;charset=utf8','test','test');
//$dbLeg  = new \Slim\PDO\Database('mysql:host=;dbname=test;charset=utf8','test','test');
