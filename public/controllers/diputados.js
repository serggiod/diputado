angular
    .module('diputado')
    .controller('diputados', function($http, $$scope) {
        $http
            .get('/rest/institucion.php/diputados')
            .success(function(json) {
                if (json.result) $scope.diputados = json.rows;
            });
    });