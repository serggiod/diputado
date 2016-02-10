angular
	.module('diputado')
	.controller('diputados',function($http,$ui,$scope){
		$http.get('/rest/diputados.php/diputados')
			.success(function(json){
				$scope.diputados = json.rows;
				$ui.init();
			});
	});