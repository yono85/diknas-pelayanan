jQuery(document).ready(function ($) {
  "use strict";

  // Page Loader
  // if (document.referrer.indexOf(window.location.host) <= 0) {
  //   var body = document.getElementsByTagName("body");

  //   var loadingContainer = document.createElement("div");
  //   loadingContainer.setAttribute("class", "loading-container");

  //   var spinner = document.createElement("div");
  //   spinner.setAttribute("class", "spinner-grow text-primary");
  //   spinner.setAttribute("role", "status");

  //   var loading = document.createElement("div");
  //   loading.setAttribute("class", "sr-only");
  //   loading.innerHTML = "Loading...";

  //   spinner.appendChild(loading);
  //   loadingContainer.appendChild(spinner);

  //   body[0].insertBefore(loadingContainer, body[0].firstChild);

  //   $(".loading-container").fadeOut(7000, function () {
  //     $(".moby__aside-structure").fadeIn(0);
  //   });
  // } else {
  //   $(".loading-container").hide();
  // }

  // Nav Toggle

  // Open/close sidebar menu (make it collapsable or permanent)
  $("#menu-btn, #menu-btn-sec").click(function () {
    const asideActive = document.getElementsByClassName("aside-active");
    if (asideActive[0]) {
      $("#collaps1").addClass("show");
    } else {
      $("#collaps1").removeClass("show");
    }
    $(".moby__aside-structure").toggleClass("aside-active");
    $(".moby__aside-holder").toggleClass("aside-collapsed");
  });

  // Add a class in the sidebar holder when sidebar is collapsed
  $(".moby__aside-holder").mouseover(function () {
    const isAsideActive = document.getElementsByClassName("aside-active");
    if (isAsideActive && isAsideActive.length > 0) {
      $(".moby__aside-holder").removeClass("aside-collapsed");
    }
  });

  // remove a class in the sidebar holder when sidebar is open
  $(".moby__aside-holder").mouseout(function () {
    const isAsideActive = document.getElementsByClassName("aside-active");
    if (isAsideActive && isAsideActive.length > 0) {
      $(".moby__aside-holder").addClass("aside-collapsed");
    }
  });

  // add a class when aside is active
  $(".moby__side-bar").mouseover(function () {
    const asideActive = document.getElementsByClassName("aside-active");
    if (asideActive && asideActive.length > 0) {
      $(".moby__side-bar").addClass("hover-side-bar");
    }
  });

  // remove a class when aside is not active (close all menu options in the drawer)
  $(".moby__side-bar").mouseout(function (e) {
    const asideActive = document.getElementsByClassName("aside-active");
    // Will only called when sidebar is collapsed and open only on hover
    if (asideActive && asideActive.length > 0) {
      $(".moby__side-bar").removeClass("hover-side-bar");

      setTimeout(function () {
        const asideCollapsed = document.getElementsByClassName("aside-collapsed");
        if (asideCollapsed && asideCollapsed.length > 0) {
          // collapsable side menu ids
          var collapsIds = ["1", "2", "3", "9", "10", "13", "14", "15", "19", "20", "30", "101"];

          collapsIds.forEach(function (i) {
            $("#collaps" + i).removeClass("show");
          });
          
        }
      }, 100);
    }
  });

  // close all menu option except the one user has clicked on
  // $(".moby__drawer-menu a").click(function () {
  //   // collapsable side menu ids
  //   var collapsIds = ["1", "2", "3", "9", "10", "13", "14", "15", "19", "20", "30", "101"];
  //   var id = this.hash.replace("#collaps", "");
  //   collapsIds.splice(collapsIds.indexOf(id), 1);
  //   collapsIds.forEach(function (i) {
  //     $("#collaps" + i).removeClass("show");
  //     $(`a[href='${"#collaps" + i}']`).attr("aria-expanded", "false");
  //   });
  //   var hash = this.hash;
  //   setTimeout(function () {
  //     $(`${hash}`).addClass("show");
  //   }, 100);
  // });

  // toggle class when user click on drawer icon
  $("#header-menu-btn, #drawer-icon").click(function () {
    $(".moby__aside-structure").toggleClass("responsive-aside");
  });

  // toggle class when user click on search icon
  $("#search-btn, #search-close-btn").click(function () {
    $(".header-search-bar").toggleClass("visible");

    $("body .header-search-bar").find('input[type="text"]').val('');

    if( $(this).attr('id') === 'search-btn' )
    {

      setTimeout(function () {
            
        $("body").find('.search-input.area-header-src input[type="text"]').focus();

      }, 500);
      
    }

  });



  // DropDown //
  $(".moby__nav-list .simple-dropdown").on("click", function (e) {
    $(this).next().toggle();
  });

  // Plus and minus Button //
  $("#qty_input").prop("disabled", true);
  $("#plus-btn").click(function () {
    $("#qty_input").val(parseInt($("#qty_input").val()) + 1);
  });
  $("#minus-btn").click(function () {
    $("#qty_input").val(parseInt($("#qty_input").val()) - 1);
    if ($("#qty_input").val() == 0) {
      $("#qty_input").val(1);
    }
  });

  // Plus and minus Button 1 //
  $("#qty_input1").prop("disabled", true);
  $("#plus-btn1").click(function () {
    $("#qty_input1").val(parseInt($("#qty_input1").val()) + 1);
  });
  $("#minus-btn1").click(function () {
    $("#qty_input1").val(parseInt($("#qty_input1").val()) - 1);
    if ($("#qty_input1").val() == 0) {
      $("#qty_input1").val(1);
    }
  });

  // Plus and minus Button 2 //
  $("#qty_input2").prop("disabled", true);
  $("#plus-btn2").click(function () {
    $("#qty_input2").val(parseInt($("#qty_input2").val()) + 1);
  });
  $("#minus-btn2").click(function () {
    $("#qty_input2").val(parseInt($("#qty_input2").val()) - 1);
    if ($("#qty_input2").val() == 0) {
      $("#qty_input2").val(1);
    }
  });

  // Plus and minus Button 3 //
  $("#qty_input3").prop("disabled", true);
  $("#plus-btn3").click(function () {
    $("#qty_input3").val(parseInt($("#qty_input3").val()) + 1);
  });
  $("#minus-btn3").click(function () {
    $("#qty_input3").val(parseInt($("#qty_input3").val()) - 1);
    if ($("#qty_input3").val() == 0) {
      $("#qty_input3").val(1);
    }
  });

  // Contact Page
  $("#contact-list-btn").click(function () {
    $(".contact-list-holder").toggleClass("contact-list-mobile-view");
  });

  // Conversation Page
  $("#conversation-list-btn").click(function () {
    $(".conversation-list-h").toggleClass("conversation-list-mobile-view");
  });

  // Mail Box Page
  $(".mailbox-list .list-item, #mailbox-back-btn").click(function () {
    $(".moby__mail-show").toggleClass("moby__mail-show-mobile-view");
  });

  $("#mailbox-list-btn").click(function () {
    $(".mail-list-holder").toggleClass("mail-list-holder-mobile-view");
  });

  // Invoice Page
  $("#invoice-list-btn").click(function () {
    $(".invoice-list-holder").toggleClass("invoice-list-holder-mobile-view");
  });
});

// Tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Carousel
$(function () {
  $('[data-toggle="popover"]').popover();
});

// Popover
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});

// Date Picker
$(document).ready(function () {
  $(".invoice-input").datepicker({});
});



$(function () 
{
  var dateFormat = "mm/dd/yy",
    from = $("#from")
      .datepicker({
        defaultDate: "-1w",
        changeMonth: true,
        numberOfMonths: 2,
      })
      .on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
        cekrangedate(from.val(),to.val());
      }),
    to = $("#to")
      .datepicker({
        defaultDate: "-1w",
        changeMonth: true,
        numberOfMonths: 2,
      })
      .on("change", function () {
        from.datepicker("option", "maxDate", getDate(this));

        cekrangedate(from.val(),to.val());
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);

    } catch (error) {
      date = null;
    }

    return date;
  }

});

/* Event Calendar */
$(document).ready(function () {
  $(".event-calendar").datepicker({
    showOtherMonths: true,
  });
  $(".ui-datepicker-header").after(
    " <div class='pd-20 border-bottom'> <div class='input-group search-input pd-l-10 border border-radius'> <i class='icon-search icon'></i> <input class='form-control' type='search' placeholder='Search for Event' aria-label='Search'> </div> </div> "
  );
});

// Date Picker
$(document).ready(function () {
  $(".date-picker").datepicker();
});

// Header Popover
$(document).ready(function () {
  $(".dropdown > .dropdown-menu li").on("click", function (event) {
    event.stopPropagation();
  });
});

// Scrollbar
// Initialize the plugin
const scrollers = document.querySelectorAll(".scroller", {
  wheelSpeed: 0.7,
  minScrollbarLength: 40,
  maxScrollbarLength: 300,
  suppressScrollX: true,
});
scrollers.forEach(function (s) {
  new PerfectScrollbar(s);
});
