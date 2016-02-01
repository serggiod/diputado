angular
	.module('diputado')
	.controller('actions',function($scope,$location,$http,$session){
		//$session.init();
		$scope.siteFab = false;

		$scope.fabAction = function(){
			if($scope.siteFab){
				$scope.siteFab = false;
			}
			else {
				$scope.siteFab = true;
			}
		};

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

		$scope.gotSidebar = function(){
			
		};

		$scope.goInicio = function(){
			$scope.fabAction();
			$location.path('#/inicio');
		};

		$scope.goProyectos = function(){
			$scope.fabAction();
			$location.path('#/proyectos');
		};

		$scope.goPrensa = function(){
			$scope.fabAction();
			$location.path('#/prensa');
		};

		$scope.goFotografias = function(){
			$scope.fabAction();
			$location.path('#/fotografias');
		};

		$scope.goVideos = function(){
			$scope.fabAction();
			$location.path('#/videos');
		};

	});