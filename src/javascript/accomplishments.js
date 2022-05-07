var accomplishmentsSwiper = new Swiper(".accomplishments_wrapper", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  slidesPerView: 1.2,
  breakpoints: {
    630: {
      slidesPerView: 1.8,
    },
    992: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 50,
    },
  },
});

$(".video_dbirthday").prop("muted", true);

$("#dbirthdayPlay").on("click", function () {
  $(".video").css("display", "flex");
  $(".video_dbirthday").prop("muted", false);
  $(".video_dbirthday").trigger("play");
  $(".video_dbirthday").addClass("show_form_bottom");
  $(".video_dbirthday").removeClass("hide_form_bottom");
});

$(".video_close").on("click", function () {
  $(".video_dbirthday").prop("muted", true);
  $(".video_dbirthday").removeClass("show_form_bottom");
  $(".video_dbirthday").addClass("hide_form_bottom");
  setTimeout(() => {
    $(".video").hide();
  }, 400);
});
