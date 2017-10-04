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

        

        $scope.primero = function(){
            $scope.actualInt=1;
            $scope.getProyectos();
            Materialize.toast('Página ' + $scope.actualInt + ' solicitada.',4000);
        };

        $scope.anterior = function(){
            $scope.actualInt--;
            if($scope.actualInt<=0) $scope.actualInt = 1;
            $scope.getProyectos();
            Materialize.toast('Página ' + $scope.actualInt + ' solicitada.',4000,'rounded');
        };

        $scope.siguiente = function($event){
            $scope.actualInt++;
            if($scope.actualInt>$scope.ultimoInt) $scope.actualInt = $scope.ultimoInt;
            $scope.getProyectos();
            Materialize.toast('Página ' + $scope.actualInt + ' solicitada.',4000,'rounded');
        };

        $scope.ultimo = function(){
            $scope.actualInt = $scope.ultimoInt;
            $scope.getProyectos();
            Materialize.toast('Página ' + $scope.actualInt + ' solicitada.',4000,'rounded');
        };

        $scope.aplicarFiltros = function(forma){
            $scope.forma = forma;
            $scope.getProyectos();
            Materialize.toast('Filtro: Aplicando filtros especiales.',4000,'rounded');
        };

        $scope.cambiarForma = function(forma){
            $scope.forma = forma;
            $scope.getProyectos();
            if(forma=='T') Materialize.toast('Filtro: Ver todos los proyectos.',4000,'rounded');
            if(forma=='L') Materialize.toast('Filtro: Ver solo proyectos de Ley.',4000,'rounded');
            if(forma=='R') Materialize.toast('Filtro: Ver solo proyectos de Resolución.',4000,'rounded');
            if(forma=='D') Materialize.toast('Filtro: Ver solo proyectos de Declaración.',4000,'rounded');
        };

        $scope.cambiarOrden = function(orden){
            $scope.orden = orden;
            $scope.getProyectos();
            if(orden=='D') Materialize.toast('Filtro: Nuevos primero.',4000,'rounded');
            if(orden=='A') Materialize.toast('Filtro: Nuevos al último.',4000,'rounded');
        };

        $scope.quitarFiltros = function(){
            $scope.actualInt = 1;
            document.getElementById('numero').value = '';
            document.getElementById('letra').value = '';
            document.getElementById('keyword').value = '';
            document.getElementById('anio').value = '';
            $scope.getProyectos();
            Materialize.toast('Se han quitado los filtros.',4000,'rounded');
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
                        $scope.proyectos = json.rows;
                        $scope.ultimoInt = parseInt($scope.proyectos[0].end);
                        $scope.spinner   = false;
                    }
                });
        };

        $scope.init();
    });