<?php

	$filename = filter_input(INPUT_GET,'filename',FILTER_SANITIZE_STRING);
	$file = false;

	switch($filename){

		case 'logo':
			$file = '/var/www/html/public/img/jujuy.png';
		break;

		case 'fotografia':
			$file = '/var/www/html/public/img/diputados/indefinido.jpg';
		break;

	}

	if($file){
		$img = base64_encode(file_get_contents($file));
		echo $img;
		die;
	}

	else{
		header("Status: 404 Not Found",true);
		header('HTTP/1.0 404 Not Found',true);
		header('Conection: close',true);
		die;
	}

?>