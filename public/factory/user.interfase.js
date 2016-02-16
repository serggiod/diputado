angular
    .module('diputado')
    .factory('$ui',function($http,$session,$local,$location,$routeParams){
        return {
            init:function(){
                
                var $this   = this; 
                
                if($routeParams.uriname===undefined) {
                    $this.resetUi();
                }

                else {
                    var regexp  = new RegExp('^([A-Z]+)(-([A-Z])+)+(-[A-Z]+)|([A-Z]+)(-[A-Z]+)$','g');
                    var uriname = $routeParams.uriname.match(regexp);
                    if(uriname!=null){
                        if($session.exists('diputado')) {
                            var json = $session.get('diputado');
                            if(json.uriname==uriname){
                                $this.initUi(json);
                            }
                            else {
                                $this.getInitData(uriname);
                            }
                        }
                        else {
                            $this.getInitData(uriname);
                        }
                    }
                    else {
                        $location.path('/');
                    }
                }
            },
            resetUi:function(){
                
                $('#sideimg')
                    .attr('src','');
                
                $('#sidename')
                    .html('');
                
                $('#sideperiodo')
                    .html('');

                $('#sideemail')
                    .html('');

                $('#sidebloimg')
                    .attr('src','');

                $('#sidebloname')
                    .html('');

                $('#sidetel')
                    .html('');

                $('#sideweb')
                    .html('');

                $('#sideface')
                    .html('');

                $('#sideyt')
                    .html('');

                $('#ulcomisiones')
                    .html('');

                $('#sidecard')
                    .css('display','none');

                $('#sidecomisiones')
                    .css('display','none');

                $('#sidecontacto')
                    .css('display','none');

                $('#btnfloating1')
                    .css('display','none');

                $('#btnfloating2')
                    .css('display','none');

                $('#loading').hide();
            },
            initUi:function(json){
                $this = this;
                
                $this.resetUi(); 

                $('#sideimg')
                    .attr('src','/imgcdn/diputados/'+json.rows.fotografia);
                
                $('#sidename')
                    .html(json.rows.nombre);
                
                $('#sideperiodo')
                    .html('<strong>Mandato: </strong>'+json.rows.periodo);

                $('#sideemail')
                    .html('<a href="mailto:'+json.rows.email+'">'+json.rows.email+'</a>');

                $('#sidebloimg')
                    .attr('src','/imgcdn/bloques/'+json.rows.logo);

                $('#sidebloname')
                    .html(json.rows.bloque);

                if(json.rows.telefono!=null){
                    $('#sidetel')
                        .html(''+json.rows.telefono+'');
                }

                if(json.rows.paginaweb!=null){
                    $('#sideweb')
                        .html(json.rows.paginaweb);
                }

                if(json.rows.facebook!=null){
                    $('#sideface')
                        .html(''+json.rows.facebook+'');
                }

                if(json.rows.yotutube!=null){
                    $('#sideyt')
                        .html(json.rows.yotutube);                               
                }

                ulcomisiones = $('#ulcomisiones');
                for(i in json.rows.comisiones){
                    ulcomisiones.append('<li>'+json.rows.comisiones[i].cargo+' de '+json.rows.comisiones[i].comision+'</li>')
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

                $('#loading').hide();
            },
            getInitData:function(uriname){
                var $this = this;
                $http.get('/rest/diputados.php/diputado/'+uriname)
                    .success(function(json){
                        if(json.result){
                            $session.set('diputado',json);
                            $this.initUi(json);
                        }
                    })
                    .error(function(){
                        $location.path('/');
                    });
            },
            uiInit:function(){
                $this=this;
                $local.clear();
                $this.uiLogo();
                $this.uiFotografia();
            },         
            uiLogo:function(){
                $this = this;
                $http.get('ui.files.php?filename=logo')
                    .success(function(img){
                        $local.set('logo',img);
                        $('#logo').attr('src','data:image/gif;base64,'+img);
                    });
            },

            // Load Fotografia.
            uiFotografia:function(){
                $http.get('ui.files.php?filename=fotografia')
                    .success(function(img){
                        $local.set('fotografia',img);
                        $('#diputado-fotografia').attr('src','data:image/gif;base64,'+img);
                    });
            },

            // Solicitar la fotografia de un diputado.
            loadDiputadoFotografia:function(){
                diputado = $session.get('diputado');
                if(typeof(diputado.archivo)==='string'){
                    filename = diputado.archivo;
                    fotografia = {};
                    console.log($local.exists('fotografia'));
                    if($local.exists('fotografia')) {
                        fotografia = $local.get('fotografia');
                        if(fotografia.name==filename){
                            $('#diputado-fotografia').attr('src','data:image/jpg;base64,'+fotografia.content);
                        }
                        else{
                           $http.get('imgs/diputado.fotografia.php?filename='+filename)
                                .success(function(img){
                                    fotografia.name = filename;
                                    fotografia.content= img;
                                    $local.set('fotografia',fotografia);
                                    $('#diputado-fotografia').attr('src','data:image/jpg;base64,'+img);
                                });
                            
                        }
                    }
                    else {
                       $http.get('imgs/diputado.fotografia.php?filename=indefinido.jpg')
                            .success(function(img){
                                fotografia.name = filename;
                                fotografia.content= img;
                                $local.set('fotografia',fotografia);
                                $('#diputado-fotografia').attr('src','data:image/jpg;base64,'+img);
                            });
                    }
                }
            }
        };
    });