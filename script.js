$(window).scroll(function() {
  var bottomNavbar = $(".bottom-navbar");
  var scrollPosition = $(window).scrollTop();

  if (scrollPosition > 100) {
    bottomNavbar.addClass("transparent");
  } else {
    bottomNavbar.removeClass("transparent");
  }
});
