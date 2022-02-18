$(document).ready(function(){
    let anchoVentana = window.innerWidth;
    let menu = $("#menu > ul");
    let estado = true;    
    ScrollReveal().reveal('#nosotros',{delay: 500, easing: 'ease-in' });
    ScrollReveal().reveal('#marcas',{delay: 500, easing: 'ease-in' });
    ScrollReveal().reveal('#beneficios',{delay: 500, easing: 'ease-in' });
    //ScrollReveal().reveal('#proyectos_especiales',{delay: 500, easing: 'ease-in' });
    ScrollReveal().reveal('#clientes',{delay: 500, easing: 'ease-in' });

    //codigo del slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 500,
        speed: 500,
        auto: true,
        
    });
    $("#menu-btn").click(function () {
        if (estado == false) {
          menu.hide();
          estado = !estado;
        } else {
          menu.showFlex();
          estado = !estado;
        }
      });
    
      $.fn.showFlex = function () {
        this.css("display", "flex");
      };
    
      window.addEventListener("resize", function () {
        if (window.innerWidth > 739 ) {
          menu.showFlex();
        }
        if (window.innerWidth < 738 ) {
            menu.hide();
    
        }
      });
    
    $('#enviar').click(function(e){
        e.preventDefault();
        let nombre = $('#nombre');
        let email = $('#correo');
        let telefono = $('#telefono');
        let mensaje = $('#mensaje-validacion');
        let exp = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        let expdominio = /(gmail)|(hotmail)|(outlook)|(yahoo)/;
        
        if(expdominio.test($.trim(email.val()))){
            mensaje.text('Ingresa correo corporativo');
        }else{
            if(!exp.test($.trim(email.val()))){
                mensaje.text('Ingresa un correo valido')
            }else{
                const prospecto = {
                    nombre: $.trim(nombre.val()),
                    email: $.trim(email.val()),
                    telefono: $.trim(telefono.val()) || 'Sin numero registrado'
                }
                //enviarDatos(prospecto);
                axios.post('https://sistemasrod.herokuapp.com/api/rodselect/prospecto',prospecto)
                .then(res => {
                    console.log(res);
                    mensaje.text(`Muchas felicidades ${nombre.val()}, te haz registrado correctamente, espera a que te contactemos.`);
                    nombre.val('');
                    email.val('');
                    telefono.val('');
                    
                })
                .catch(err => {
                    console.log(err.response);
                    mensaje.text('Este correo ya fue registrado, espera a que te contactemos.');
                });

            }
        }
        
        
        
        
        
    });


})