angular
	.module('diputado')
	.controller('diputado',function($scope,$location){

		$scope.fotografia = 'indefinido.jpg';
		$scope.nombre     = 'Nombre del Diputado';
		$scope.apellido   = 'Apellido del Diputado';
		$scope.mandato    = '0000-0000';

		console.log($scope.fotografia);
		console.log($scope.nombre);
		console.log($scope.apellido);
		console.log($scope.mandato);

		$('#cargando').hide();
	});