angular
	.module('diputado')
	.controller('diputados',function($http,$scope,$rootScope){
		$http.get('/rest/institucion.php/diputados')
			.success(function(json){
				if(json.result){
					$scope.diputados = json.rows;
					$rootScope.loading = true;
				}
			});
	});