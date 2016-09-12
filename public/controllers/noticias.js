angular
	.module('diputado')
	.controller('noticias',function($scope,$rootScope,$http,$routeParams,$location){

		$scope.uriname   = $routeParams.uriname;
		$scope.fkr 		 = $rootScope.fkr;
		$scope.yt  		 = $rootScope.yt;
		$scope.primero   = 1;
		$scope.anterior  = 1;
		$scope.actual    = 1;
		$scope.siguiente = 1;
		$scope.ultimo    = 1;

		$scope.init = function(){
			$scope.getPartes($scope.primero);
		};

		$scope.toggle = function(elementId){
			$('#'+elementId).toggle()
		};

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

		$scope.init();

	});