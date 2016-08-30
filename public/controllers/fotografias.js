angular
	.module('diputado')
	.controller('fotografias',function($scope,$http,$httpX,$session,$routeParams){
		
		$scope.uriname  = $routeParams.uriname;
		$scope.diputado = JSON.parse($session.get('diputado'));

		$scope.init = function(){

			if($scope.diputado.flickr.match('www.flickr.com')!=null){
				uri = $scope.diputado.flickr.replace('https://','').split('/').join('.-.');
				$http
					.get('https://legproxy.herokuapp.com/flickr/'+uri)
					.success(function(json){
						$scope.fotografias = json;
					});
			}
			
		};

		$scope.init();
	});