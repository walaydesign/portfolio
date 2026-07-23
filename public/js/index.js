resizeHome();
$(window).on("resize scroll", function () {
  resizeHome();
});
function resizeHome() {
  let serviceTop = $("#service").offset().top - $(".header").height();
  let worksTop = $("#works").offset().top - $(".header").height();
  let aboutTop = $("#about").offset().top - $(".header").height();
  let contactTop = $("#contact").offset().top - $(".header").height();

  // navbar
  if ($(window).scrollTop() >= serviceTop && $(window).scrollTop() < worksTop) {
    $(".gotoelement-service")
      .addClass("active")
      .parents("li")
      .siblings("li")
      .find(".gotoelement")
      .removeClass("active");
  } else if (
    $(window).scrollTop() >= worksTop &&
    $(window).scrollTop() < aboutTop
  ) {
    $(".gotoelement-works")
      .addClass("active")
      .parents("li")
      .siblings("li")
      .find(".gotoelement")
      .removeClass("active");
  } else if (
    $(window).scrollTop() >= aboutTop &&
    $(window).scrollTop() < contactTop
  ) {
    $(".gotoelement-about")
      .addClass("active")
      .parents("li")
      .siblings("li")
      .find(".gotoelement")
      .removeClass("active");
  } else if ($(window).scrollTop() >= contactTop) {
    $(".gotoelement-contact")
      .addClass("active")
      .parents("li")
      .siblings("li")
      .find(".gotoelement")
      .removeClass("active");
  } else {
    $(".gotoelement").removeClass("active");
  }

  let contactBottom = $("#contact").offset().top - $(window).height();
  // sidebtn
  if ($(window).scrollTop() >= contactBottom) {
    $(".sidebtn").addClass("bluebg");
  } else {
    $(".sidebtn").removeClass("bluebg");
  }
}

$(".gotoelement").click(function () {
  let target = $(this).data("target");
  let top = $(target).offset().top - 60;
  $("html, body").animate({ scrollTop: top }, 300);
  $(this).addClass("active");

  $(".header__menu").removeClass("active");
  $(".header__nav").removeClass("active");
  if ($(".header").hasClass("navshow")) {
    $(".header").removeClass("navshow");
  }
});

var reviewers = document.querySelectorAll(".reviewer");
var swiperEl = document.querySelector(".testimonials__carousel");
if (swiperEl && window.Swiper) {
  var testiSwiper = new Swiper(swiperEl, {
    loop: true,
    speed: 800,
    autoHeight: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        var i = this.realIndex;
        reviewers.forEach(function (p, k) {
          p.classList.toggle("reviewer--active", k === i);
        });
      },
    },
  });
  reviewers.forEach(function (p) {
    p.addEventListener("click", function () {
      testiSwiper.slideToLoop(parseInt(p.getAttribute("data-testi-i"), 10));
    });
  });

  function equalizeQuoteHeights() {
    var contents = document.querySelectorAll(".testimonials__inner");
    contents.forEach(function (el) {
      el.style.height = "";
    });
    if (window.innerWidth < 991) {
      var maxH = 0;
      contents.forEach(function (el) {
        maxH = Math.max(maxH, el.offsetHeight);
      });
      contents.forEach(function (el) {
        el.style.height = maxH + "px";
      });
      testiSwiper.updateAutoHeight(0);
    }
  }

  equalizeQuoteHeights();
  window.addEventListener("resize", equalizeQuoteHeights);
}

var articlesEl = document.querySelector(".articles__carousel");
if (articlesEl && window.Swiper) {
  new Swiper(articlesEl, {
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 24,
      },
      575: {
        slidesPerView: 2.2,
        spaceBetween: 24,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}

var options1 = {
  startVal: 0,
  smartEasingAmount: 0,
};
var options2 = {
  startVal: 0,
  smartEasingAmount: 0,
};
var options3 = {
  startVal: 0,
  smartEasingAmount: 0,
};
new Waypoint({
  element: document.querySelector(".hero__stats"),
  handler: function () {
    var numAnim1 = new countUp.CountUp("year", 5, options1);
    numAnim1.start();
    var numAnim2 = new countUp.CountUp("project", 200, options2);
    numAnim2.start();
    var numAnim3 = new countUp.CountUp("client", 50, options3);
    numAnim3.start();
  },
  offset: "80%",
});