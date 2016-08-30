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
	.service('$httpX',function(){
		_this     = this;
		_this.url = null;
		_this.get = function(url){
			_this.url = encodeURI(url);
			return _this.r;
		};
		_this.r   = {
			success:function(callback){
				string = 'Cadena de datos';
				if('function' === typeof callback){
					$.ajax({
					  url:_this.url,
					  type:'GET',
					  dataType:'jsonp',
					  //crossDomain:true,
					  success:function(r,response,x) {
					  	/*
					  	response = HttpResponse(json.dumps('{"status" : "success"}'));
						response.__setitem__("Content-type", "application/json");
						response.__setitem__("Access-Control-Allow-Origin", "*");
						*/
						console.log(r,response,x);
					  	callback(response);
					  }
					});
					
					/*
					//iframe = document.createElement('<iframe id="iframeHttpX" src="'+_this.url+'" style="display:none;"></iframe>');
					iframe = document.createElement('IFRAME');
					iframe.id = 'iframeHttpX';
					iframe.style = 'display:block;width:500px;height:500px;z-index:1000;';
					iframe.src = _this.url;
					//iframe.srcdoc = _this.url;
					document.body.appendChild(iframe);
					console.log(_this.url);
					$('#iframeHttpX').on('load',function(){
						console.log('holis');
						htmlDoc = $('#iframeHttpX').html();
						htmlDoc = window['iframeHttpX'].contentWindow;
						
					});
					*/
					/*
					inlineElement.onload = function(){
						console.log(inlineElement.contentWindow.document);
					};
					*/
					
				}
				return _this.r;
			},
			error:function(callback){
				if('function' === typeof callback) callback();
				return _this.r;
			}
		};
	});