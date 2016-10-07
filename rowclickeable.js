/**
 * Created by Nicolas Diaz on 07-10-2016.
 *
 * Convierte una row en una seccion clickeable, redirigiendo al navegador a una URL especifica.
 *
 * se debe agregar el atributo data-redirect al tr y en el escribir la url a la que se quiere ir al momento
 * de pinchar sobre la el tr en cuestión.
 */

$.fn.rowclickeable = function () {
    //tr con atributo data-redirect debe tener una url para rediccionar
    var row = $(this);

    row.mouseover(function () {
        row.css("cursor", 'pointer')
    });

    row.on("click", function () {
        window.location.href = row.attr('data-redirect');
    });
};
