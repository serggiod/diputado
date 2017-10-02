angular
    .module('legislaturaweb', ['ngRoute', 'ui.materialize', 'ngSanitize', 'ngAnimate'])
    .config(function($routeProvider,$httpProvider) {
        var now = Date.now();
        $routeProvider
            .when('/:uriname/proyectos/:numero/:letra/:keyword/:anio/:tipo/:forma/:orden/:ini/:end', {
                templateUrl: 'views/proyectos.html?'+now+'='+now,
                controller: 'proyectos'
            });
    });