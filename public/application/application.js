angular
	.module('diputado',['ui.materialize','ngRoute','ngSession','ngLocal'])
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
	.run(function($http,$rootScope,$location,$session){
		$rootScope.init = function(uriname){
			$http.get('/rest/institucion.php/diputado/'+uriname)
				.success(function(json){
					if(json.result){
						$rootScope.diputado = json.rows;
						
						if($rootScope.diputado.email)     $rootScope.mail = true;
						if($rootScope.diputado.telefono)  $rootScope.tel  = true;
						if($rootScope.diputado.paginaweb) $rootScope.web  = true;
						if($rootScope.diputado.facebook)  $rootScope.face = true;
						if($rootScope.diputado.twitter)   $rootScope.twit = true;
						if($rootScope.diputado.youtube)   $rootScope.yt   = true;

						$rootScope.diputado.uriname = uriname;
						$session.set('diputado',JSON.stringify($rootScope.diputado));

					}
					else {
						$location.url('/');
					}
				})
				.error(function(){
					$location.url('/');
				});
		};
	});