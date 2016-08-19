angular
	.module('diputado')
	.controller('fotografias',function($scope,$http,$session,$routeParams){
		
		$scope.uriname = $routeParams.uriname;
		$scope.diputado = JSON.parse($session.get('diputado'));

		$scope.init = function(){

			if($scope.diputado.flickr.match('www.flickr.com')!=null){

				iframe = document.createElement('iframe');
				iframe.src=$scope.diputado.flickr;
				iframe.onload=function(){
					console.log('Se a cargado un html');
				};

				console.log(iframe);
				/*
				$http.get($scope.diputado.flickr)
					.success(function(htmldoc){
						console.log(htmldoc);
					})
					.error(function(e){
						console.log(e);
					});
					*/
			}
			
		};

		$scope.init();
	});