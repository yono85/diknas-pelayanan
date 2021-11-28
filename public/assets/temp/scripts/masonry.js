jQuery(document).ready(function ($) {
  "use strict";
  // external js: isotope.pkgd.js
  $(".grid").isotope({
    itemSelector: ".grid-item",
    masonry: {
      columnWidth: "",
    },
  });
});
