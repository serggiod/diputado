angular
	.module('diputado')
	.controller('proyectos',function($root,$scope,$rootScope,$http,$routeParams){
		
		/* Valores por defecto. */
		$scope.uriname  = $routeParams.uriname;
		$scope.tipo     = 'cofirmados';

		/* Inicializar el controlador. */
		$scope.init = function(){
			if($rootScope.nombre==undefined){
				json = JSON.parse(sessionStorage.getItem('json'));
				$root.init(json);
			}
			$scope.fkr 		= $rootScope.fkr;
			$scope.yt  		= $rootScope.yt;
			$scope.getProyectos();
		};

		/* Cambiar tipo de proyectos. */
		$scope.cambiarTipo = function(tipo){
			$scope.tipo = tipo;
			$scope.getProyectos();
		};

		/* Solicitar proyectos. */
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

		/* Iniciar. */
		$scope.init();
	});