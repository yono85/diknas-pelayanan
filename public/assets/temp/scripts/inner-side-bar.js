jQuery(document).ready(function ($) {
  "use strict";

  // Inner Side Bar
  $(window)
    .scroll(function () {
      var windscroll = $(window).scrollTop();
      if (windscroll >= 50) {
        $(".card").each(function (i) {
          // The number at the end of the next line is how pany pixels you from the top you want it to activate.
          if ($(this).position().top <= windscroll - 0) {
            $(".inner-page-side-menu li a.active").removeClass("active");
            $(".inner-page-side-menu li a").eq(i).addClass("active");
          }
        });

        $(".inner-comp-card").each(function (i) {
          // The number at the end of the next line is how pany pixels you from the top you want it to activate.
          if ($(this).position().top <= windscroll - 0) {
            $(".inner-page-side-menu li a.active").removeClass("active");
            $(".inner-page-side-menu li a").eq(i).addClass("active");
          }
        });
      } else {
        $(".inner-page-side-menu li a.active").removeClass("active");
        $(".inner-page-side-menu li a:first").addClass("active");
      }
    })
    .scroll();
});
