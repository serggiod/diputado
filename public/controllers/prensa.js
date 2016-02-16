angular
	.module('diputado')
	.controller('prensa',function($scope,$location,$http,$session,$local,$routeParams,$ui){
		
		$scope.init = function(){
			$ui.init();
			$scope.diputado = $session.get('diputado');
			$scope.getPartes();
		};

		$scope.leer = function(urititulo){
			console.log(urititulo);
		};

		$scope.imprimir = function(urititulo){
			console.log(urititulo);
		};

		$scope.getPartes = function (){
			uriname = $scope.diputado.uriname;
			uri = '/rest/diputado.php/'+uriname+'/partes';
			console.log(uri);
			$http.get(uri)
				.success(function(json){
					if(json.result){
						$scope.partes = json.rows;
					}
				})
				.error(function(){
					$location.path('/'+uriname)
				});
		};

		$scope.init();
	});