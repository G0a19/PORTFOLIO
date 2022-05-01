$(function () {
  if ($(window).width() >= 992) {
    var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
      .staggerTo(
        ".slide:not(:last-child)",
        1,
        {
          y: "-100%",
          ease: Linear.easeNone,
          onStartParams: ["{self}"],
          onStart: function fadeOut(tween) {
            $(tween.target).find(".layer").fadeOut();
            $(tween.target).next().find(".layer").delay(600).fadeIn();
          },
          onReverseCompleteParams: ["{self}"],
          onReverseComplete: function fadeIn(tween) {
            $(tween.target).find(".layer").fadeIn();
            $(tween.target).next().find(".layer").fadeOut();
          },
        },
        2,
        1
      )
      .staggerTo(
        ".slide:last-child",
        1,
        {
          onCompleteParams: ["{self}"],
          onComplete: function (tween) {
            $(tween.target).find(".layer").fadeOut();
          },
          onReverseCompleteParams: ["{self}"],
          onReverseComplete: function (tween) {
            $(tween.target).find(".layer").fadeIn();
          },
        },
        1
      );

    new ScrollMagic.Scene({
      triggerElement: ".slides",
      triggerHook: "onLeave",
      duration: "200%",
    })
      .setPin(".slides")
      .setTween(wipeAnimation)
      .addTo(controller);
  }
});

const skillsPoint = new Waypoint({
  element: document.querySelector(".skills"),
  offset: "80%",
  handler: function (e) {
    if ($(`.skills_icons-single`).hasClass("hide")) {
      const i = document.querySelectorAll(`.skills_icons-single`);
      i.forEach((e, t) => {
        setTimeout(() => {
          if (t % 2 === 0)
            $(e).removeClass("hide"), $(e).addClass("show_form_left");
          else $(e).removeClass("hide"), $(e).addClass("show_form_right");
        }, 300 * t);
      });
    }
  },
});
