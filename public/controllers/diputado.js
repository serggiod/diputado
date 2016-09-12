angular
	.module('diputado')
	.controller('diputado',function($scope,$rootScope,$http,$routeParams,$location){

		/* Optener uriname */
		$scope.uriname = $routeParams.uriname;
		
		/* Función inicilizadora. */
		uri = '/rest/institucion.php/diputado/'+$scope.uriname;
		$scope.init = function(){
			$http.get(uri)
				.success(function(json){

					if(json.result){
						
						$rootScope.bloque     = json.rows.bloque;     
						$rootScope.bloquehash = json.rows.bloquehash ;
						$rootScope.comisiones = json.rows.comisiones ;
						$rootScope.email      = json.rows.email;
						$rootScope.escudo     = json.rows.escudo;
						$rootScope.facebook   = json.rows.facebook;
						$rootScope.flickr     = json.rows.flickr;
						$rootScope.fotografia = json.rows.fotografia;
						$rootScope.mandato    = json.rows.mandato;
						$rootScope.nombre     = json.rows.nombre;
						$rootScope.paginaweb  = json.rows.paginaweb;
						$rootScope.telefono   = json.rows.telefono;
						$rootScope.twitter    = json.rows.twitter;
						$rootScope.uriname    = json.rows.uriname;
						$rootScope.youtube    = json.rows.youtube;


						if($rootScope.email!=null)     { $rootScope.mail = true; }
						if($rootScope.telefono!=null)  { $rootScope.tel  = true; }
						if($rootScope.paginaweb!=null) { $rootScope.web  = true; }
						if($rootScope.facebook!=null)  { $rootScope.face = true; }
						if($rootScope.twitter!=null)   { $rootScope.twit = true; }
						if($rootScope.youtube!=null)   { $rootScope.yt   = true; }
						if($rootScope.flickr!=null)    { $rootScope.fkr  = true; }
						
						$rootScope.loading = true;

						$location.url('/'+$scope.uriname+'/proyectos');

					}
					else {
						$location.url('/');
					}
				})
				.error(function(){
					$location.url('/');
				});
		}

		/* Inicializar. */
		$scope.init();
		

	});