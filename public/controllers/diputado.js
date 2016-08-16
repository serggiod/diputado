angular
	.module('diputado')
	.run(function($http,$rootScope,$location){
		$rootScope.init = function(){
			uriname = $location.url().substring(($location.url().indexOf('/') +1),$location.url().length);
			$http.get('/rest/institucion.php/diputado/'+uriname)
				.success(function(json){
					if(json.result){
						$rootScope.diputado = json.rows;

						if($rootScope.diputado.email)     $rootScope.mail = true;
						if($rootScope.diputado.telefono)  $rootScope.tel  = true;
						if($rootScope.diputado.paginaweb) $rootScope.web  = true;
						if($rootScope.diputado.facebook)  $rootScope.face = true;
						if($rootScope.diputado.twitter)   $rootScope.twit = true;
						if($rootScope.diputado.youtube)   $rootScope.yt   = true;

						$rootScope.diputado.uriname = uriname;

					}
					else {
						$location.url('/');
					}
				})
				.error(function(){
					$location.url('/');
				});
		};
	})
	.controller('diputado',function($scope,$rootScope,$location,$http,$session,$local,$routeParams){

		$scope.init = function(){

			$rootScope.init();
			$rootScope.loading = true;

			$scope.uriname = $routeParams.uriname;
			$scope.primero   = 1;
			$scope.anterior  = 1;
			$scope.actual    = 1;
			$scope.siguiente = 1;
			$scope.ultimo    = 1;
			$scope.getPartes($scope.primero);
		};

		$scope.toggle = function(elementId){
			$('#'+elementId).toggle()
		};

		$scope.getPartes = function(page){
			$http.get('/rest/diputado.php/'+$scope.uriname+'/partes/'+page)
				.success(function(json){
					if(json.result){
						$scope.noticias  = json.rows.partes;
						$scope.actual    = json.rows.paginador.pagina;
						$scope.ultimo    = json.rows.paginador.paginas;
						$scope.anterior  = json.rows.paginador.pagina -1;
						$scope.siguiente = json.rows.paginador.pagina +1;
						if($scope.anterior<1) $scope.anterior = 1;
						if($scope.siguiente>$scope.ultimo) $scope.siguiente=$scope.ultimo;
					}
				});
		};

		$scope.init();

	});