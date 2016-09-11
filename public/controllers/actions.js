angular
	.module('diputado')
	.controller('actions',function($scope,$location,$http){

		// Funciones para Navigator Bar.
		$scope.goHome = function(){
			window.location.href='/';
		};

		$scope.goRefresh = function(){
			window.location.reload();
		};

		$scope.goDiputados = function(){
			window.location.href='#/diputados';
			window.location.reload();
		};

		$scope.goProyectos = function(){
			diputado = $session.get('diputado');
			uri = '/'+diputado.uriname+'/proyectos';
			$location.path(uri);
		};

		$scope.goPrensa = function(){
			diputado = $session.get('diputado');
			uri = '/'+diputado.uriname+'/prensa';
			$location.path(uri);
		};

		$scope.goFotografias = function(){
			diputado = $session.get('diputado');
			uri = '/'+diputado.uriname+'/fotografias';
			$location.path(uri);
		};

		$scope.goVideos = function(){
			diputado = $session.get('diputado');
			uri = '/'+diputado.uriname+'/videos';
			$location.path(uri);
		};

	});