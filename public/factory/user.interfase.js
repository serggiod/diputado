angular
    .module('diputado')
    .factory('$ui',function($http,$session,$local){
        return {
            init:function(){
                $('#loading').hide();
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