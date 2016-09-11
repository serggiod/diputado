angular
	.module('diputado')
	.controller('fotografias',function($scope,$http,$routeParams){
		
		$scope.uriname  = $routeParams.uriname;
		$scope.diputado = JSON.parse();

		$scope.init = function(){

			if($scope.diputado.flickr.match('www.flickr.com')!=null){
				uri = window.btoa($scope.diputado.flickr);
				$http
					.get('https://legproxy.herokuapp.com/flickr/'+uri)
					.success(function(json){
						$scope.fotografias = json;
					});
			}
			
		};

		$scope.init();
	});