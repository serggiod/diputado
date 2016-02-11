angular
	.module('diputado')
	.controller('actions',function($scope,$location,$http,$session){

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

		$scope.goInicio = function(){
			$location.path('#/inicio');
		};

		$scope.goProyectos = function(){
			diputado = $session.get('diputado');
			uri = '/'+diputado.uriname+'/proyectos';
			console.log(uri);
			$location.path(uri);
		};

		$scope.goPrensa = function(){
			$location.path('#/prensa');
		};

		$scope.goFotografias = function(){
			$location.path('#/fotografias');
		};

		$scope.goVideos = function(){
			$location.path('#/videos');
		};

	});