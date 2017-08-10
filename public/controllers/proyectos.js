angular
    .module('diputado')
    .controller('proyectos', function($scope, $http, $routeParams) {

        /* Valores por defecto. */
        $scope.uriname = $routeParams.uriname;
        $scope.tipo = 'cofirmados';

        /* Inicializar el controlador. */
        $scope.init = function() {
            $scope.getProyectos();
        };

        /* Cambiar tipo de proyectos. */
        $scope.cambiarTipo = function(tipo) {
            $scope.tipo = tipo;
            $scope.getProyectos();
        };

        /* Solicitar proyectos. */
        $scope.getProyectos = function() {
            var uriname = $scope.uriname;
            var uri = '/rest/diputado.php/' + uriname + '/proyectos/' + $scope.tipo;
            $http
                .get(uri)
                .success(function(json) {
                    if (json.result) {
                        $scope.proyectos = json.rows;
                    }
                });
        };

        /* Iniciar. */
        $scope.init();
    });