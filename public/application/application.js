angular
    .module('diputado', ['ui.materialize', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/diputados.html',
                controller: 'diputados'
            })
            .when('/:uriname/proyectos', {
                templateUrl: 'views/proyectos.html',
                controller: 'proyectos'
            })
            .when('/:uriname/noticias', {
                templateUrl: 'views/noticias.html',
                controller: 'noticias'
            })
            .when('/:uriname/fotografias', {
                templateUrl: 'views/fotografias.html',
                controller: 'fotografias'
            })
            .when('/:uriname/videos', {
                templateUrl: 'views/videos.html',
                controller: 'videos'
            })
            .when('/:uriname', {
                templateUrl: 'views/diputado.html',
                controller: 'diputado'
            })
            .otherwise({ redirectTo: '/' });
    });