var i = new ScrollMagic.Controller();

if ($(window).width() < 992) {
  var swiper = new Swiper(".description_slider", {
    slidesPerView: "1.8",
    spaceBetween: 20,
    loop: true,
  });
} else {
  var t = new TimelineMax().add(
    TweenMax.staggerFromTo(
      "#magic",
      0.001,
      { x: "0%", duration: 0.001 },
      { x: `-${80}%`, duration: 0.001 },
      0.001
    )
  );
  new ScrollMagic.Scene({
    triggerElement: ".description",
    triggerHook: "onLeave",
    duration: "150%",
  })
    .setPin(".description")
    .setTween(t)
    .addTo(i);
}
