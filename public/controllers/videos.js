angular
    .module('diputado')
    .controller('videos', function($scope, $http, $routeParams) {

        /* Valores por defecto. */
        $scope.uriname = $routeParams.uriname;

        /* Función inicializadora.
        $scope.init = function(){
        	if($rootScope.nombre==undefined){
        		json = JSON.parse(sessionStorage.getItem('json'));
        		$root.init(json);
        	}
        	$scope.fkr = $rootScope.fkr;
        	$scope.yt  = $rootScope.yt;
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

        // Inicializar.
        $scope.init(); */
    });