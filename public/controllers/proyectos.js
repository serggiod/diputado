angular
    .module('legislaturaweb')
    .controller('proyectos', function($scope, $http, $routeParams, $document) {
        
        $scope.init = function() {
            $scope.uriname = $routeParams.uriname;
            $scope.tipo    = $routeParams.tipo;
            $scope.forma   = $routeParams.forma;
            $scope.orden   = $routeParams.orden;
            $scope.ini     = parseInt($routeParams.ini);
            $scope.end     = parseInt($routeParams.end);
            $scope.formaDef = {
                'T':'T - Ver todos los proyectos.',
                'L':'L - Ver solo los proyectos de Ley.',
                'R':'R - Ver solo los proyectos de Resolución.',
                'D':'D - Ver solo los proyectos de Declaración.'
            };
            $scope.ultimoInt = 1;
            $scope.actualInt = 1;
            $scope.getProyectos();
        };

        $scope.getParsedUri = function(){
            var uri = '/rest/diputado.php/' + $scope.uriname + '/proyectos/' + $scope.tipo;

            // Filtro: Numero.
            numero = parseInt(document.getElementById('numero').value);
            if(numero>=1) uri += '/' + numero;
            else uri += '/0';
            
            // Filtro: Letra.
            letra = document.getElementById('letra').value;
            if(letra.length>=1) uri += '/' + letra;
            else uri += '/_';

            // Filtro: Keyword.
            keyword = document.getElementById('keyword').value;
            if(keyword.length>=1) uri += '/' + keyword;
            else uri += '/_';

            // Filtro: Anio.
            anio = parseInt(document.getElementById('anio').value);
            if(anio>=1983) uri += '/' + anio;
            else uri += '/0';

            // Filtro: Forma.
            uri += '/' + $scope.forma;

            // Filtro: Orden.
            uri += '/' + $scope.orden;

            return uri;
        };

        $scope.cambiarForma = function(forma){
            $scope.forma = forma;
            $scope.getProyectos();
        };

        $scope.cambiarOrden = function(orden){
            $scope.orden = orden;
            $scope.getProyectos();
        };

        $scope.quitarFiltros = function(){
            $scope.actualInt = 1;
            document.getElementById('numero').value = '';
            document.getElementById('letra').value = '';
            document.getElementById('keyword').value = '';
            document.getElementById('anio').value = '';
            $scope.getProyectos();
        };

        $scope.primero = function(){
            $scope.actualInt=1;
            $scope.getProyectos();
        };

        $scope.anterior = function(){
            $scope.actualInt--;
            if($scope.actualInt<=0) $scope.actualInt = 1;
            $scope.getProyectos();
        };

        $scope.siguiente = function(){
            $scope.actualInt++;
            if($scope.actualInt>$scope.ultimoInt) $scope.actualInt = $scope.ultimoInt;
            $scope.getProyectos();
        };

        $scope.ultimo = function(){
            $scope.actualInt = $scope.ultimoInt;
            $scope.getProyectos();
        };

        $scope.getProyectos = function() {
            $scope.spinner = true;
            uri = $scope.getParsedUri();
            uri += '/' + $scope.actualInt;
            uri += '/10';
            $http
                .get(uri)
                .success(function(json) {
                    if(json.result===true){
                        console.log(json.rows);
                        $scope.spinner = false;
                    }
                    /*if (json.result) $scope.proyectos = json.rows;
                    $scope.endF = parseInt($scope.proyectos[0].end);
                    $scope.prev = parseInt($scope.ini) -1;
                    if(!$scope.prev) parseInt($scope.prev) =1;
                    $scope.sig = parseInt($scope.ini) +1;
                    if($scope.sig>$scope.endF) $scope.sig = parseInt($scope.endF);
                    $scope.spinner = false;
                    */
                });
        };

        $scope.init();
    });