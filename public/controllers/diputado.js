angular
	.module('diputado')
	.controller('diputado',function($root,$scope,$rootScope,$http,$routeParams,$location){

		/* Optener uriname */
		$scope.uriname = $routeParams.uriname;
		
		/* Función inicilizadora. */
		$scope.init = function(){
			uri = '/rest/institucion.php/diputado/'+$scope.uriname;
			$http.get(uri)
				.success(function(json){
					if(json.result){
						$root.init(json);
						sessionStorage.setItem('json',JSON.stringify(json));
						$location.url('/'+$scope.uriname+'/proyectos');
					}
					else {
						$location.url('/');
					}
				})
				.error(function(){
					$location.url('/');
				});
		};

		/* Inicializar. */
		$scope.init();
		

	});