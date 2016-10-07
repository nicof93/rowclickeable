Row Clickeable JS
===================

Pequeño complemento JQuery que convierte los tr de una tabla en secciones clickeables.
La idea se inspira en ListView de Android, donde, seleccionando un elemento se muestran
los detalles del mismo o se hace algo usando el ID del elemento como base.

#### <i class="icon-file"></i> Implementación


Es uso de esa pequeña herramienta es bastante simple, basta incluir JQuery al proyecto e incluir el archivo [rowclickeable.js](https://github.com/nicof93/rowclickeable/blob/master/rowclickeable.js) de este repositorio.

Incluimos lo siguiente en el `<footer>` del sitio y le agregamos el atributo data-redirect a cada`<tr>` que queramos convertir en clickeable:

    <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="/bundles/ntlsistemasitio/js/rowclickeable.js"></script>
    <script type="application/javascript">
        $("tr[data-redirect]").rowclickeable();
    </script>
