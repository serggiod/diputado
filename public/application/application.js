angular
	.module('diputado',['ui.materialize','ngRoute'])
	.config(function($routeProvider){
	    $routeProvider
	    	.when('/',{
	    		redirectTo:'/diputados'
	    	})
	    	.when('/diputados',{
	    		templateUrl:'views/diputados.html',
	    		controller:'diputados'
	    	})
	    	.when('/:uriname/proyectos',{
		        templateUrl:'views/proyectos.html',
		        controller:'proyectos'
		    })
			.when('/:uriname/noticias',{
		        templateUrl:'views/noticias.html',
		        controller:'noticias'
		    })
		    .when('/:uriname/fotografias',{
		        templateUrl:'views/fotografias.html',
		        controller:'fotografias'
		    })
		    .when('/:uriname/videos',{
		        templateUrl:'views/videos.html',
		        controller:'videos'
		    })
		    .when('/:uriname',{
		        templateUrl:'views/diputado.html',
		        controller:'diputado'
		    })
		    .otherwise({redirectTo:'/diputados'});
	})
	.factory('$root',function($rootScope){
		var ifz = {
			init:function(json){
				$rootScope.bloque     = json.rows.bloque;     
				$rootScope.bloquehash = json.rows.bloquehash ;
				$rootScope.comisiones = json.rows.comisiones ;
				$rootScope.email      = json.rows.email;
				$rootScope.escudo     = json.rows.escudo;
				$rootScope.facebook   = json.rows.facebook;
				$rootScope.flickr     = json.rows.flickr;
				$rootScope.fotografia = json.rows.fotografia;
				$rootScope.mandato    = json.rows.mandato;
				$rootScope.nombre     = json.rows.nombre;
				$rootScope.paginaweb  = json.rows.paginaweb;
				$rootScope.telefono   = json.rows.telefono;
				$rootScope.twitter    = json.rows.twitter;
				$rootScope.uriname    = json.rows.uriname;
				$rootScope.youtube    = json.rows.youtube;
				if($rootScope.email!=null)     { $rootScope.mail = true; }
				if($rootScope.telefono!=null)  { $rootScope.tel  = true; }
				if($rootScope.paginaweb!=null) { $rootScope.web  = true; }
				if($rootScope.facebook!=null)  { $rootScope.face = true; }
				if($rootScope.twitter!=null)   { $rootScope.twit = true; }
				if($rootScope.youtube!=null)   { $rootScope.yt   = true; }
				if($rootScope.flickr!=null)    { $rootScope.fkr  = true; }
				$rootScope.loading = true;
			}
		};
		return ifz;
	});