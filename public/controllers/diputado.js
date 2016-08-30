angular
	.module('diputado')
	.controller('diputado',function($scope,$rootScope,$http,$session,$routeParams){

		$scope.uriname = $routeParams.uriname;
		
		$scope.init = function(){
			$scope.primero   = 1;
			$scope.anterior  = 1;
			$scope.actual    = 1;
			$scope.siguiente = 1;
			$scope.ultimo    = 1;
			$http.get('/rest/institucion.php/diputado/'+$scope.uriname)
				.success(function(json){
					if(json.result){
						$rootScope.diputado = json.rows;
						
						if($rootScope.diputado.email)     { $rootScope.mail = true; }
						if($rootScope.diputado.telefono)  { $rootScope.tel  = true; }
						if($rootScope.diputado.paginaweb) { $rootScope.web  = true; }
						if($rootScope.diputado.facebook)  { $rootScope.face = true; $scope.face = true;}
						if($rootScope.diputado.twitter)   { $rootScope.twit = true; $scope.twit = true;}
						if($rootScope.diputado.youtube)   { $rootScope.yt   = true; $scope.yt   = true;}
						if($rootScope.diputado.flickr)    { $rootScope.fkr  = true; $scope.fkr  = true;}

						$session.set('diputado',JSON.stringify(json.rows));
						$scope.getPartes($scope.primero);
						$rootScope.loading = true;
					}
					else {
						$location.url('/');
					}
				})
				.error(function(){
					$location.url('/');
				});
			
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
						$scope.anterior  = (parseInt(json.rows.paginador.pagina)) -1;
						$scope.siguiente = (parseInt(json.rows.paginador.pagina)) +1;
						if($scope.anterior<1) $scope.anterior = 1;
						if($scope.siguiente>$scope.ultimo) $scope.siguiente=$scope.ultimo;
					}
				});
		};

		$scope.init();

	});