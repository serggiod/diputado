angular
	.module('diputado')
	.controller('proyectos',function($scope,$rootScope,$http,$routeParams){
		
		$scope.uriname  = $routeParams.uriname;
		$scope.tipo     = 'cofirmados';
		$scope.fkr 		= $rootScope.fkr;
		$scope.yt  		= $rootScope.yt;

		$scope.init = function(){
			$scope.getProyectos();
		};

		$scope.cambiarTipo = function(tipo){
			$scope.tipo = tipo;
			$scope.getProyectos();

		};

		$scope.getProyectos = function(){
			$rootScope.loading=false;
			var uriname  = $scope.uriname;
			var uri      = '/rest/diputado.php/'+uriname+'/proyectos/'+$scope.tipo;
			$http.get(uri)
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