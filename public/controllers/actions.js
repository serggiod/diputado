angular
	.module('diputado')
	.controller('actions',function($scope,$location,$http){

		$scope.goHome = function(){
			window.location.href='/';
		};

		$scope.goRefresh = function(){
			window.location.reload();
		};

		$scope.goDiputados = function(){
			window.location.href='#/diputados';
			window.location.reload();
		};

	});