angular
	.module('diputado')
	.controller('diputado',function($scope,$location,$http,$session,$local,$routeParams,$ui){
		
		$scope.paramDip = $routeParams.diputado;
		
		$scope.init = function(){
			$http.get('models/diputado.php/'+$scope.paramDip)
				.success(function(json){
					$session.set('diputado',json);
					$scope.diputadoInit();
				})
				.error(function(){
					$location.path('/diputados');
				});
		};

		$scope.diputadoInit = function(){
			$ui.init();
			
		};

		$scope.init();
	});