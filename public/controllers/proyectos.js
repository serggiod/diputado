angular
	.module('diputado')
	.controller('proyectos',function($scope,$rootScope,$http,$session,$routeParams){
		
		$scope.uriname  = $routeParams.uriname;
		$scope.diputado = JSON.parse($session.get('diputado'));
		$scope.tipo     = 'cofirmados';

		$scope.init = function(){
			$scope.getProyectos();
		};

		$scope.cambiarTipo = function(tipo){
			$scope.tipo = tipo;
			$scope.getProyectos();
		};

		$scope.getProyectos = function(){
			var uriname  = $scope.uriname;
			var uri      = '/rest/diputado.php/'+uriname+'/proyectos/'+$scope.tipo;
			$http.get(uri)
				.success(function(json){
					if(json.result){
						$scope.proyectos = json.rows;
					}
				})
				.error(function(){
					$location.path('/'+uriname)
				});
		};

		$scope.init();
	});