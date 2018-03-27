$(function() {
  // BOCZNE MENU
  $(".button-collapse").sideNav();

  // PRZESUWANA KARUZELA
  $(".carousel.carousel-slider").carousel({
    fullWidth: true
  });

  // MENU WYBORU
  $("select").material_select();

  // MODAL
  $(".modal").modal();
});
