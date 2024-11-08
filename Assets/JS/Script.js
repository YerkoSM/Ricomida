const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$( "#enviarCorreo" ).on( "click", function() {
    alert( "El correo fue enviado correctamente..." );
  } );

  $("#ig-rojo").on( "dblclick", function(){
    $(this).css({
    "color": "#dc3545"
    });
});

$("#ig-rojo1").on( "dblclick", function(){
    $(this).css({
    "color": "#dc3545"
    });
});

$(document).ready(function() {
  $(".toggle-content").on("click", function() {
    // Usamos $(this).next() para seleccionar el párrafo (contenido) que está justo después del título
    $(this).next(".card-text").toggle();

    // con esto seleccionamos todo el contenido de las tarjetas
    // $(".color-txt1").toggle();
  });
});
