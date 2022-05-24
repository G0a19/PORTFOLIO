var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

$(".topBanner_scroll").on("click", function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".description").offset().top,
    },
    1000
  );
});

$(function () {
  $(document).ready(function () {
    0 < $(".topBanner_oneside").length &&
      jQuery(document).mousemove(function (t) {
        var e = jQuery(this).find("img"),
          a = t.pageX - jQuery(window).outerWidth() / 2,
          r = t.pageY - jQuery(window).outerHeight() / 2;
        e.each(function () {
          var t = a / jQuery(this).data("speed"),
            e = r / jQuery(this).data("speed");
          jQuery(this).css({
            "-webkit-transform": "translate3d(" + t + "px," + e + "px,0px)",
            "-moz-transform": "translate3d(" + t + "px," + e + "px,0px)",
            "-ms-transform": "translate3d(" + t + "px," + e + "px,0px)",
            "-o-transform": "translate3d(" + t + "px," + e + "px,0px)",
            transform: "translate3d(" + t + "px," + e + "px,0px)",
          });
        });
      });
  });
});
