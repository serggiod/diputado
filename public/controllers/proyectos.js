angular
	.module('diputado')
	.controller('proyectos',function($scope,$rootScope,$http,$routeParams){
		
		$scope.uriname  = $routeParams.uriname;
		$scope.tipo     = 'cofirmados';

		$scope.init = function(){
			$scope.getProyectos();
		};

		$scope.cambiarTipo = function(tipo){
			$rootScope.loading=false;
			$scope.tipo = tipo;
			$scope.getProyectos();

		};

		$scope.getProyectos = function(){
			var uriname  = $scope.uriname;
			var uri      = '/rest/diputado.php/'+uriname+'/proyectos/'+$scope.tipo;
			$http.get('firmados.json')
				.success(function(json){
					if(json.result){
						$scope.proyectos = json.rows;
						$rootScope.loading = true;
					}
				})
				.error(function(){
					$location.path('/'+uriname)
				});
		};

		$scope.init();
	});