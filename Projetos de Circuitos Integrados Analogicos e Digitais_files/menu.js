$(document).ready(function () {

  $("#nav-mobile .scroller").append($("#nav-main").html());

  $("#nav-trigger span").click(function () {
    if ($("nav#nav-mobile .nav-bg").hasClass("expanded")) {
      $("nav#nav-mobile div.expanded")
        .removeClass("expanded")
        .hide("slide", { direction: "left" }, 250);
      $("nav#nav-mobile .hotsite-menu").removeClass("expanded").slideUp(250);
      $(".mostrar-itens span").text("UNISANTOS");
    } else {
      $("nav#nav-mobile .nav-bg")
        .addClass("expanded")
        .show("slide", { direction: "left" }, 250);
      $("nav#nav-mobile .hotsite-menu").addClass("expanded").slideDown(250);
    }
  });
});
