angular
    .module('diputado')
    .controller('main', function($scope, $http, $routeParams, $location) {

        $scope.init = function() {

            uriname = $location.path().replace('/proyectos', '').replace('/', '');
            url = '/rest/diputados.php/diputado/' + uriname;

            if (uriname) {
                $http
                    .get(url)
                    .success(function(json) {
                        if (json.result === true) {
                            json.rows.bloque = json.rows.bloque.replace('-', ' ').toUpperCase();
                            for (i = 0; i < json.rows.comisiones.length; i++) {
                                comision = json.rows.comisiones.shift();
                                comision.comision = comision.comision.replace('-', ' ').toUpperCase();
                                json.rows.comisiones.push(comision);
                            }
                            $scope.model = json.rows;
                        }
                    });
            } else $scope.model = false;

        };

        $scope.init();

    });