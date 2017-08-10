angular
    .module('diputado')
    .controller('fotografias', function($root, $scope, $http, $routeParams) {
        $scope.uriname = $routeParams.uriname;

        /* Función inicializadora.
        $scope.init = function() {
            /*
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

        // Inicializar.
        $scope.init(); */
    });