angular
    .module('diputado')
    .controller('diputados', function() {
        var loc = window.location.href || document.location.href;
        var end = loc.indexOf('diputado');
        var server = loc.substring(0, end) + '#/diputados';
        window.location.href = server;
        document.location.href = server;
    });