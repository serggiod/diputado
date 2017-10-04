angular
    .module('legislaturaweb')
    .controller('diputado', function($http, $scope, $location) {
        $scope.init = function(){
            var loc   = document.location.href || window.location.href;
            var index = loc.indexOf('/#/') +3;
            $scope.uriname = loc.substr(index);
            index=$scope.uriname.indexOf('/');
            if(index>=1) $scope.uriname = $scope.uriname.substr(0,index);
            uri = '/rest/diputado.php/' + $scope.uriname + '/perfil';
            $http
                .get(uri)
                .success(function(json) {
                    if (json.result === true) {
                        json.rows.bloque = json.rows.bloque.replace(/-/g, ' ').toUpperCase();
                        for (i = 0; i < json.rows.comisiones.length; i++) {
                            comision = json.rows.comisiones.shift();
                            comision.comision = comision.comision.replace(/-/g, ' ').toUpperCase();
                            json.rows.comisiones.push(comision);
                        }
                        $scope.model = json.rows;
                        $location.path('/' + $scope.uriname + '/proyectos/0/_/_/0/cofirmados/T/D/1/10');
                    }
                });
        };
        $scope.init();
    });