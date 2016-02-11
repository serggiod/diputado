angular
	.module('diputado')
	.controller('prensa',function($scope,$location,$http,$session,$local,$routeParams,$ui){
		
		$scope.init = function(){
			$ui.init();
		};

		$scope.init();
	});