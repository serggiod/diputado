angular
	.module('diputado')
	.controller('diputado',function($scope,$location,$http,$session,$local,$routeParams,$ui){
		
		$scope.init = function(){

			$scope.diputado = {uriname:$routeParams.uriname};

			if(typeof($scope.diputado.uriname)!='undefined'){
				$http.get('/rest/diputados.php/diputado/'+$scope.diputado.uriname)
					.success(function(json){
						if(json.result){
							$scope.diputado = json;

							$session.set('diputado',json);
							
							$('#sideimg')
								.attr('src','/imgcdn/diputados/'+$scope.diputado.rows.fotografia);
							
							$('#sidename')
								.html($scope.diputado.rows.nombre);
							
							$('#sideperiodo')
								.html('<strong>Mandato: </strong>'+$scope.diputado.rows.periodo);

							$('#sideemail')
								.html('<a href="mailto:'+$scope.diputado.rows.email+'">'+$scope.diputado.rows.email+'</a>');

							$('#sidebloimg')
								.attr('src','/imgcdn/bloques/'+$scope.diputado.rows.logo);

							$('#sidebloname')
								.html($scope.diputado.rows.bloque);

							if($scope.diputado.rows.telefono!=null){
								$('#sidetel')
									.html(''+$scope.diputado.rows.telefono+'');
							}

							if($scope.diputado.rows.paginaweb!=null){
								$('#sideweb')
									.html($scope.diputado.rows.paginaweb);
							}

							if($scope.diputado.rows.facebook!=null){
								$('#sideface')
									.html(''+$scope.diputado.rows.facebook+'');
							}

							if($scope.diputado.rows.yotutube!=null){
								$('#sideyt')
									.html($scope.diputado.rows.yotutube);								
							}

							ulcomisiones = $('#ulcomisiones');
							for(i in $scope.diputado.rows.comisiones){
								ulcomisiones.append('<li>'+$scope.diputado.rows.comisiones[i].cargo+' de '+$scope.diputado.rows.comisiones[i].comision+'</li>')
							}

							$('#sidecard')
								.css('display','block');

							$('#sidecomisiones')
								.css('display','block');

							$('#sidecontacto')
								.css('display','block');

							$('#btnfloating1')
								.css('display','block');

							$('#btnfloating2')
								.css('display','block');

							$ui.init();

						}
					})
					.error(function(){
						$location.path('/diputados');
					});
			}
		};

		$scope.init();
	});