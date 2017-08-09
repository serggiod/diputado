angular
	.module('diputado')
	.controller('noticias',function($root,$scope,$rootScope,$http,$routeParams,$location){

		/* Valores por defecto. */
		$scope.uriname   = $routeParams.uriname;
		$scope.primero   = 1;
		$scope.anterior  = 1;
		$scope.actual    = 1;
		$scope.siguiente = 1;
		$scope.ultimo    = 1;

		/* Inicializar el controlador. */
		$scope.init = function(){
			if($rootScope.nombre==undefined){
				json = JSON.parse(sessionStorage.getItem('json'));
				$root.init(json);
			}
			$scope.fkr = $rootScope.fkr;
			$scope.yt  = $rootScope.yt;
			$scope.getPartes($scope.primero);
		};

		/* Solicitar partes. */
		$scope.getPartes = function(page){
			$rootScope.loading = false;
			$http.get('/rest/diputado.php/'+$scope.uriname+'/partes/'+page)
				.success(function(json){
					if(json.result){
						$scope.noticias  = json.rows.partes;
						$scope.actual    = json.rows.paginador.pagina;
						$scope.ultimo    = json.rows.paginador.paginas;
						$scope.anterior  = (parseInt(json.rows.paginador.pagina)) -1;
						$scope.siguiente = (parseInt(json.rows.paginador.pagina)) +1;
						if($scope.anterior<1) $scope.anterior = 1;
						if($scope.siguiente>$scope.ultimo) $scope.siguiente=$scope.ultimo;
						$rootScope.loading = true;
					}
				});
		};

		/* Iniciar. */
		$scope.init();

	});