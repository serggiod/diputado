angular
	.module('diputado',['ngRoute'])
	.config(function($routeProvider){
	    $routeProvider
		    .when('/',{
		        templateUrl:'views/diputado.html',
		        controller:'diputado'
		    })
		    .when('/diputado',{
		        templateUrl:'views/diputado.html',
		        controller:'diputado'
		    })
		    .otherwise({redirectTo:'/'});
	});