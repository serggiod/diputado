angular
	.module('diputado')
	.controller('diputado',function($scope,$location,$http,$session,$local,$routeParams,$ui){
		
		$scope.init = function(){
			$ui.init();
		};

		$scope.init();
	});