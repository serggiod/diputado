angular
    .module('diputado')
    .controller('diputado', function($scope, $routeParams, $location) {
        $scope.uriname = $routeParams.uriname;
        $location.path('/' + $scope.uriname + '/proyectos');
    });