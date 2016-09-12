angular
	.module('diputado')
	.controller('fotografias',function($root,$scope,$rootScope,$http,$routeParams){
		
		/* Valores por defecto. */
		$scope.uriname  = $routeParams.uriname;

		/* Función inicializadora. */
		$scope.init = function(){
			if($rootScope.nombre==undefined){
				json = JSON.parse(sessionStorage.getItem('json'));
				$root.init(json);
			}
			$scope.fkr = $rootScope.fkr;
			$scope.yt  = $rootScope.yt;
			$rootScope.loading=false;
			if($rootScope.flickr.match('www.flickr.com')!=null){
				uri = window.btoa($rootScope.flickr);
				$http
					.get('https://legproxy.herokuapp.com/flickr/'+uri)
					.success(function(json){
						$scope.fotografias = json;
						$rootScope.loading=true;
					});
			}
			
		};

		/* Inicializar. */
		$scope.init();
	});