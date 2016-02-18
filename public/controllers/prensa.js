angular
	.module('diputado')
	.controller('prensa',function($scope,$location,$http,$session,$local,$routeParams,$ui){
		
		$scope.init = function(){
			$ui.init();
			$scope.diputado = $session.get('diputado');
			$scope.getPartes();
		};

		$scope.leer = function(id){
			if(id){
				uriname = $scope.diputado.uriname;
				uri = '/rest/diputado.php/'+uriname+'/parte/'+id;
				$http.get(uri)
					.success(function(json){
						if(json.result){
							doc = '<div id="leerMasCard" style="position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);z-index:20000;overflow:hidden;padding:5%;">';
							doc += '<div class="card" style="width:100%;height:100%;overflow:auto;background-color:#fff;">';
							doc += '<div class="card card-action blue white-text">';
							doc += '<h3>'+json.rows.volanta+'</h3>';
							doc += '<h1>'+json.rows.titulo+'</h1>';
							doc += '<h2>'+json.rows.bajada+'</h2>';
							doc += '<h5><small>['+json.rows.fecha+'] ['+json.rows.hora+']</small></h2>';
							doc += '</div>';
							doc += '<div class="card white black-text">';
							doc += '<p>'+json.rows.cabeza+'</p>';
							doc += '<p>'+json.rows.cuerpo+'</p>';
							doc += '</div>';
							doc += '</div>';
							doc += '<a href="javascript: window.partesClose();" class="btn-floating btn-large red waves-effect waves-light right" style="z-index:100;float:right;top:-40px;right:40px;"><i class="material-icons">close</i></a>'
							doc += '</div>';
							$('body').append(doc);
						}
					})
					.error(function(){
						$location.path('/'+uriname);
					});
			}
		};

		$scope.imprimir = function(id){
			if(id){
				uriname  = $scope.diputado.uriname;
				uri = '/rest/diputado.php/'+uriname+'/parte/'+id;
				$http.get(uri)
					.success(function(json){
						if(json.result){
							var doc = window.open(new Document,'doc','width=10,height=10, resizable=yes');
							doc.document.open();
							doc.document.write('<html>');
							doc.document.write('<head><meta charset="UTF-8"><title>'+json.rows.titulo+'</title></head>');
							doc.document.write('<body>');
							doc.document.write('<h3>'+json.rows.volanta+'</h3>');
							doc.document.write('<h1>'+json.rows.titulo+'</h1>');
							doc.document.write('<h2>'+json.rows.bajada+'</h2>');
							doc.document.write('<h5>['+json.rows.fecha+'] ['+json.rows.hora+']</h2>');
							doc.document.write('<p>'+json.rows.cabeza+'</p>');
							doc.document.write('<p>'+json.rows.cuerpo+'</p>');
							doc.document.write('</body>');
							doc.document.write('</html>');
							doc.document.close();
							doc.print();
							doc.close();
							
						}
					})
					.error(function(){
						$location.path('/'+uriname);
					})
			}
		};

		$scope.getPartes = function (){
			uriname = $scope.diputado.uriname;
			uri = '/rest/diputado.php/'+uriname+'/partes';
			$http.get(uri)
				.success(function(json){
					if(json.result){
						$scope.partes = json.rows;
					}
				})
				.error(function(){
					$location.path('/'+uriname)
				});
		};

		$scope.init();
	});

window.partesClose = function(){
	$('#leerMasCard').remove();
};