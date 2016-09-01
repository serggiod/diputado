angular
	.module('diputado')
	.controller('videos',function($scope,$http,$httpX,$session,$routeParams){
		
		$scope.uriname  = $routeParams.uriname;
		$scope.diputado = JSON.parse($session.get('diputado'));

		$scope.init = function(){

			if($scope.diputado.youtube.match('www.youtube.com')!=null){
				uri = $scope.diputado.youtube;
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
					});
			}
			
		};

		$scope.init();
	});