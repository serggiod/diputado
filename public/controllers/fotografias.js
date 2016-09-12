angular
	.module('diputado')
	.controller('fotografias',function($scope,$rootScope,$http,$routeParams){
		
		$scope.uriname  = $routeParams.uriname;
		$scope.fkr 		= $rootScope.fkr;
		$scope.yt  		= $rootScope.yt;

		$scope.init = function(){

			$rootScope.loading=false;
			if($rootScope.flickr.match('www.flickr.com')!=null){
				uri = window.btoa($rootScope.flickr);
				$http
					.get('https://legproxy.herokuapp.com/flickr/'+uri)
					.success(function(json){
						$scope.fotografias = json;
						$rootScope.loading=true;
					});
			}
			
		};

		$scope.init();
	});