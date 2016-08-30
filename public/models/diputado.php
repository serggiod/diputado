<?php

# Requerir archivo base..
require_once 'base.php';

// Peticion GET.
$app->get('/{diputado}',function($request,$response,$args) use ($dbWeb) {

	// Calculo del conenido de la tabla.
	$diputado = filter_var($args['diputado'],FILTER_SANITIZE_STRING);
	$sql    = $dbWeb->select()
			->from('diputado')
			->where("concat(apellido,'-',replace(nombre,' ','-'))","=",$diputado)
			->where('estado','=','1');
	$query  = $sql->execute();
	$json   = $query->fetch();

	echo json_encode($json,JSON_FORCE_OBJECT);
});


// Salida del Framewrok.
$app->run();