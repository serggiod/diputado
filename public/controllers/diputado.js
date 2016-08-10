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

		$rootScope.init();
		$rootScope.loading = true;
	});