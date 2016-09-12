angular
	.module('diputado')
	.controller('videos',function($scope,$rootScope,$http,$routeParams){
		
		$scope.uriname  = $routeParams.uriname;
		$scope.fkr 		= $rootScope.fkr;
		$scope.yt  		= $rootScope.yt;

		$scope.init = function(){

			$rootScope.loading=false;
			if($rootScope.youtube.match('www.youtube.com')!=null){
				uri = $rootScope.youtube;
				if(uri.match('/channel/')) {
					uri = uri + '/videos';
				}
				else {
					uri = uri
						.replace('/featured','/videos')
						.replace('/playlists','/videos')
						.replace('/channels','/videos')
						.replace('/discussion','/videos')
						.replace('/about','/videos');
				}
				uri = window.btoa(uri);
				$http
					.get('https://legproxy.herokuapp.com/youtube/'+uri)
					.success(function(json){
						$scope.videos = json;
						$rootScope.loading=true;
					});
			}
			
		};

		$scope.init();
	});