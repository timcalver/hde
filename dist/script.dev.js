"use strict";

function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg();

(function () {
  var toggle = document.querySelector('.menu__icon');
  var menuBar = document.querySelector('.menu__bar');
  toggle.addEventListener('click', function (e) {
    $('.menu__icon, .menu__bar, .menu__body').toggleClass("active");
  });
})();

$(document).ready(function () {
  var btn = $('#back-to-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
});
$('#roadmap').click(function () {
  $("html, body").animate({
    scrollTop: $(window).height()
  }, 600);
  $('.menu__icon, .menu__bar, .menu__body').toggleClass("active");
  return false;
});
$('#team').click(function () {
  if ($(window).width() < 600) {
    $("html, body").animate({
      scrollTop: $(window).height() * 2 + $(window).height() / 2
    }, 600);
  } else {
    $("html, body").animate({
      scrollTop: $(window).height() * 2 + $(window).height() / 10
    }, 600);
  }

  $('.menu__icon, .menu__bar, .menu__body').toggleClass("active");
  return false;
});
$('#utility').click(function () {
  if ($(window).width() < 400) {
    $("html, body").animate({
      scrollTop: $(window).height() * 3 + $(window).height() * 1.3
    }, 600);
  } else if ($(window).width() < 600) {
    $("html, body").animate({
      scrollTop: $(window).height() * 4 + $(window).height() / 12
    }, 600);
  } else {
    $("html, body").animate({
      scrollTop: $(window).height() * 3 + $(window).height() / 3
    }, 600);
  }

  $('.menu__icon, .menu__bar, .menu__body').toggleClass("active");
  return false;
});
$('#faq').click(function () {
  if ($(window).width() < 400) {
    $("html, body").animate({
      scrollTop: $(window).height() * 6 + $(window).height()
    }, 600);
  } else if ($(window).width() < 600) {
    $("html, body").animate({
      scrollTop: $(window).height() * 5 + $(window).height() / 2.5
    }, 600);
  } else {
    $("html, body").animate({
      scrollTop: $(window).height() * 4 + $(window).height() / 4
    }, 600);
  }

  $('.menu__icon, .menu__bar, .menu__body').toggleClass("active");
  return false;
});

(function () {
  var toggle = document.querySelector('#paper-stacking');
  toggle.addEventListener('click', function (e) {
    $('#paper-stacking, #line1-stacking, #line2-stacking').toggleClass("acordion-active");
    $('#atb-stacking').toggleClass("active-stacking");

    if ($('#paper-reback, #line1-reback, #line2-reback').hasClass("acordion-active")) {
      $('#paper-reback, #line1-reback, #line2-reback').removeClass("acordion-active");
    }

    if ($('#paper-breeding, #line1-breeding, #line2-breeding').hasClass("acordion-active")) {
      $('#paper-breeding, #line1-breeding, #line2-breeding').removeClass("acordion-active");
    }

    if ($('#paper-royalties, #line1-royalties, #line2-royalties').hasClass("acordion-active")) {
      $('#paper-royalties, #line1-royalties, #line2-royalties').removeClass("acordion-active");
    }

    if ($('#paper-auction, #line1-auction, #line2-auction').hasClass("acordion-active")) {
      $('#paper-auction, #line1-auction, #line2-auction').removeClass("acordion-active");
    }

    $('#atb-breeding').removeClass("active-breeding");
    $('#atb-reback').removeClass("active-reback");
    $('#atb-royalties').removeClass("active-royalties");
    $('#atb-auction').removeClass("active-auction");
  });
})();

(function () {
  var toggle = document.querySelector('#paper-reback');
  toggle.addEventListener('click', function (e) {
    $('#paper-reback, #line1-reback, #line2-reback').toggleClass("acordion-active");
    $('#atb-reback').toggleClass("active-reback");

    if ($('#paper-breeding, #line1-breeding, #line2-breeding').hasClass("acordion-active")) {
      $('#paper-breeding, #line1-breeding, #line2-breeding').removeClass("acordion-active");
    }

    if ($('#paper-stacking, #line1-stacking, #line2-stacking').hasClass("acordion-active")) {
      $('#paper-stacking, #line1-stacking, #line2-stacking').removeClass("acordion-active");
    }

    if ($('#paper-royalties, #line1-royalties, #line2-royalties').hasClass("acordion-active")) {
      $('#paper-royalties, #line1-royalties, #line2-royalties').removeClass("acordion-active");
    }

    if ($('#paper-auction, #line1-auction, #line2-auction').hasClass("acordion-active")) {
      $('#paper-auction, #line1-auction, #line2-auction').removeClass("acordion-active");
    }

    $('#atb-breeding').removeClass("active-breeding");
    $('#atb-stacking').removeClass("active-stacking");
    $('#atb-royalties').removeClass("active-royalties");
    $('#atb-auction').removeClass("active-auction"); // $('#atb').toggleClass("paper-active")
    // if($('#atb').hasClass('paper-active')){
    // }
  });
})();

(function () {
  var toggle = document.querySelector('#paper-breeding');
  toggle.addEventListener('click', function (e) {
    $('#paper-breeding, #line1-breeding, #line2-breeding').toggleClass("acordion-active");
    $('#atb-breeding').toggleClass("active-breeding");
    $('#atb-reback').removeClass("active-reback");

    if ($('#paper-reback, #line1-reback, #line2-reback').hasClass("acordion-active")) {
      $('#paper-reback, #line1-reback, #line2-reback').removeClass("acordion-active");
    }

    if ($('#paper-stacking, #line1-stacking, #line2-stacking').hasClass("acordion-active")) {
      $('#paper-stacking, #line1-stacking, #line2-stacking').removeClass("acordion-active");
    }

    if ($('#paper-royalties, #line1-royalties, #line2-royalties').hasClass("acordion-active")) {
      $('#paper-royalties, #line1-royalties, #line2-royalties').removeClass("acordion-active");
    }

    if ($('#paper-auction, #line1-auction, #line2-auction').hasClass("acordion-active")) {
      $('#paper-auction, #line1-auction, #line2-auction').removeClass("acordion-active");
    }

    $('#atb-reback').removeClass("active-reback");
    $('#atb-stacking').removeClass("active-stacking");
    $('#atb-royalties').removeClass("active-royalties");
    $('#atb-auction').removeClass("active-auction");
  });
})();

(function () {
  var toggle = document.querySelector('#paper-royalties');
  toggle.addEventListener('click', function (e) {
    $('#paper-royalties, #line1-royalties, #line2-royalties').toggleClass("acordion-active");
    $('#atb-royalties').toggleClass("active-royalties");

    if ($('#paper-reback, #line1-reback, #line2-reback').hasClass("acordion-active")) {
      $('#paper-reback, #line1-reback, #line2-reback').removeClass("acordion-active");
    }

    if ($('#paper-stacking, #line1-stacking, #line2-stacking').hasClass("acordion-active")) {
      $('#paper-stacking, #line1-stacking, #line2-stacking').removeClass("acordion-active");
    }

    if ($('#paper-breeding, #line1-breeding, #line2-breeding').hasClass("acordion-active")) {
      $('#paper-breeding, #line1-breeding, #line2-breeding').removeClass("acordion-active");
    }

    if ($('#paper-auction, #line1-auction, #line2-auction').hasClass("acordion-active")) {
      $('#paper-auction, #line1-auction, #line2-auction').removeClass("acordion-active");
    }

    $('#atb-reback').removeClass("active-reback");
    $('#atb-stacking').removeClass("active-stacking");
    $('#atb-breeding').removeClass("active-breeding");
    $('#atb-auction').removeClass("active-auction");
  });
})();

(function () {
  var toggle = document.querySelector('#paper-auction');
  toggle.addEventListener('click', function (e) {
    $('#paper-auction, #line1-auction, #line2-auction').toggleClass("acordion-active");
    $('#atb-auction').toggleClass("active-auction");

    if ($('#paper-reback, #line1-reback, #line2-reback').hasClass("acordion-active")) {
      $('#paper-reback, #line1-reback, #line2-reback').removeClass("acordion-active");
    }

    if ($('#paper-stacking, #line1-stacking, #line2-stacking').hasClass("acordion-active")) {
      $('#paper-stacking, #line1-stacking, #line2-stacking').removeClass("acordion-active");
    }

    if ($('#paper-breeding, #line1-breeding, #line2-breeding').hasClass("acordion-active")) {
      $('#paper-breeding, #line1-breeding, #line2-breeding').removeClass("acordion-active");
    }

    if ($('#paper-royalties, #line1-royalties, #line2-royalties').hasClass("acordion-active")) {
      $('#paper-royalties, #line1-royalties, #line2-royalties').removeClass("acordion-active");
    }

    $('#atb-reback').removeClass("active-reback");
    $('#atb-stacking').removeClass("active-stacking");
    $('#atb-breeding').removeClass("active-breeding");
    $('#atb-royalties').removeClass("active-royalties");
  });
})();