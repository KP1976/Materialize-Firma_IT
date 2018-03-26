$(function() {
  // BOCZNE MENU
  $(".button-collapse").sideNav();

  // ODPALENIE SCROLLA
  const options = [
    {
      selector: ".navbar-fixed",
      offset: 1200,
      callback: function() {
        $("nav")
          .removeClass("transparent")
          .addClass("blue darken-3");
      }
    }
  ];

  Materialize.scrollFire(options);
});
