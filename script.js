$(window).scroll(function() {
  var bottomNavbar = $(".bottom-navbar");
  var scrollPosition = $(window).scrollTop();

  if (scrollPosition > 100) {
    bottomNavbar.addClass("transparent");
  } else {
    bottomNavbar.removeClass("transparent");
  }
});
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
