$('.contact-button').click(function() {
    $('#contacto').modal('toggle');
    $('body').find('.formulario-contacto').show();
    $('body').find('.envio-correcto').hide();
});

$(function() {
    $("body").find("#formulario").validate({
        debug: true,
        rules: {
            "email": {
                required: true,
                minlength: 6,
                email: true
            },
            "mensaje": {
                required: true,
                minlength: 10
            },

            "nombre": {
                required: true,
                minlength: 10
            },

            "empresa": {
                required: true,
                minlength: 5
            },

            "cotizar": {
                required: true,
                minlength: 6
            }

        },

        messages: {
            "email": {
                required: "Escribe tu email",
                minlength: "Escribe tu email",
                email: "Escribe tu email"
            },
            "mensaje": {
                required: "Escribe tu mensaje",
                minlength: "Escribe tu mensaje",
            },

            "nombre": {
                required: "Escribe tu nombre",
                minlength: "Escribe tu nombre"
            },

            "empresa": {
                required: "El nombre de tu empresa",
                minlength: "El nombre de tu empresa",
            },

            "cotizar": {
                required: "Producto a cotizar",
                minlength: "Producto a cotizar",
            }
        },
        submitHandler: function(form) {



            var formData = {
                name: $('#nombre').val(),
                email: $('#email').val(),
                empresa: $('#empresa').val(),
                producto: $('#producto-interes').val(),
                mensaje: $('#mensaje').val()

            };
            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: formData,
                dataType: 'json',
                success: function(data) {
                    console.log(data)
                    if (data == true) {
                        $('body').find('.formulario-contacto').hide();
                        $('body').find('.envio-correcto').show();
                    }
                }
            });
        }
    });
});

function colorMenu(menu) {
    $.when($('body').find('h3 a').removeClass('activo')).then(function() {
        $('#m' + menu).addClass('activo');
        $(".mostrar").addClass("nomostrar");
        $(".nomostrar").removeClass("mostrar");
        $('#' + menu).removeClass("nomostrar");
        $('#' + menu).addClass("mostrar");
        if (menu != "menu3" && menu != "menu4" && menu != "menu5" && menu != "menu6" && menu != "menu7" && menu != "menu1") {
            $('html, body').animate({
                scrollTop: $("#" + menu).offset().top
            }, 500);
        }
    });



}

function colorMenuP(menu) {
    $.when($('body').find('h3 a').removeClass('activo')).then(function() {
        $('#' + menu).addClass('activo');
        console.log(menu);
        if (menu == 'pmenu1') {
            $.when($('.textos-productos').hide()).then(function() {
                $('#general').show();
            })

        }

        if (menu == 'pmenu2') {
            $.when($('.textos-productos').hide()).then(function() {
                $('#textiles').show();
            })

        }
        if (menu == 'pmenu3') {
            $.when($('.textos-productos').hide()).then(function() {
                $('#alimentos').show();
            })

        }
        if (menu == 'pmenu4') {
            $.when($('.textos-productos').hide()).then(function() {
                $('#automotriz').show();
            })

        }
        if (menu == 'pmenu5') {
            $.when($('.textos-productos').hide()).then(function() {
                $('#electronica').show();
            })


        }
        if (menu == 'pmenu6') {
            $.when($('.textos-productos').hide()).then(function() {
                $('#farmaceutica').show();
            })

        }

    });



}

function flechaUp() {
    $('html, body').animate({
        scrollTop: $('html, body').offset().top
    }, 500);
}