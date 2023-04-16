$(function () {
  "use strict";
  /*-----------------------------------
   * FIXED  MENU - HEADER
   *-----------------------------------*/
  function menuscroll() {
    var $navmenu = $(".nav-menu");
    if ($(window).scrollTop() > 50) {
      $navmenu.addClass("is-scrolling");
    } else {
      $navmenu.removeClass("is-scrolling");
    }
  }
  menuscroll();
  $(window).on("scroll", function () {
    menuscroll();
  });
  /*-----------------------------------
   * NAVBAR CLOSE ON CLICK
   *-----------------------------------*/

  $(".navbar-nav > li:not(.dropdown) > a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  /*
   * NAVBAR TOGGLE BG
   *-----------------*/
  var siteNav = $("#navbar");
  siteNav.on("show.bs.collapse", function (e) {
    $(this).parents(".nav-menu").addClass("menu-is-open");
  });
  siteNav.on("hide.bs.collapse", function (e) {
    $(this).parents(".nav-menu").removeClass("menu-is-open");
  });
});

$(".smallsize").owlCarousel({
  loop: false,
  stagePadding: 15,
  margin: 10,
  nav: true,
  //   navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
  responsive: {
    0: {
      items: 2,
    },
    640: {
      items: 3,
    },
    960: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
});

$(".whyhire").owlCarousel({
  loop: false,
  stagePadding: 15,
  margin: 10,
  nav: true,
  //   navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
  responsive: {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: false,
  stagePadding: 15,
  margin: 10,
  nav: true,
  //   navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
  responsive: {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

// $(document).ready(function () {
//   $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
//     var $el = $(this);
//     var $parent = $(this).offsetParent(".dropdown-menu");
//     if (!$(this).next().hasClass("show")) {
//       $(this)
//         .parents(".dropdown-menu")
//         .first()
//         .find(".show")
//         .removeClass("show");
//     }
//     var $subMenu = $(this).next(".dropdown-menu");
//     $subMenu.toggleClass("show");

//     $(this).parent("li").toggleClass("show");

//     $(this)
//       .parents("li.nav-item.dropdown.show")
//       .on("hidden.bs.dropdown", function (e) {
//         $(".dropdown-menu .show").removeClass("show");
//       });

//     if (!$parent.parent().hasClass("navbar-nav")) {
//       $el.next().css({ top: $el[0].offsetTop, left: $parent.outerWidth() - 4 });
//     }

//     return false;
//   });
// });

jQuery(function ($) {
  if (screen.width > 1280) {
    $(".navbar .dropdown").hover(
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(250)
          .slideDown();
      },
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(100)
          .slideUp();
      }
    );

    $(".navbar .dropdown > a").click(function () {
      location.href = this.href;
    });
  }
});

var bookedfor;
var appliedfor;

function bookfor(name) {
  this.bookedfor = name;
  //document.getElementById("bookedfor").value = this.bookedfor;
  document.getElementById("bookedfor").innerHTML = this.bookedfor;
  document.forms["bookform"]["bookedfor"].value = bookedfor;

  console.log(this.bookedfor);
}

function applyfor(name) {
  this.appliedfor = name;
  //document.getElementById("appliedfor").value = this.appliedfor;
  document.getElementById("appliedfor").innerHTML = this.appliedfor;
  document.forms["applyform"]["appliedfor"].value = this.appliedfor;

  console.log(this.appliedfor);
}

var today = new Date().toISOString().split("T")[0];
document.getElementsByName("datetime")[0].setAttribute("min", today);
