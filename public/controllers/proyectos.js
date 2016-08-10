angular
	.module('diputado')
	.controller('proyectos',function($scope,$location,$http,$session,$local,$routeParams,$ui){
		
		$scope.init = function(){
			$ui.init();
			$scope.tipo = 'Cofirmados';
			$scope.getProyectos();
		};

		$scope.cambiarTipo = function(tipo){
			$scope.tipo = tipo;
			$scope.getProyectos();
		};

		$scope.getProyectos = function(){
			var diputado = $session.get('diputado');
			var uriname  = diputado.uriname;
			var uri      = '/rest/proyectos.php/proyectos/'+uriname+'/'+$scope.tipo.toLowerCase();
			$http.get(uri)
				.success(function(json){
					if(json.result){
						$scope.proyectos = json.rows;
					}
				})
				.error(function(){
					$location.path('/'+uriname)
				});
		};

		$scope.init();
	});