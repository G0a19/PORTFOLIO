$(".burger-menu").on("click", function () {
  $(this).toggleClass("burger-menu--opened");
  $(this).toggleClass("burger-menu--closed");
  if (!$(".dropdown").hasClass("dropdown_animtion")) {
    $(".dropdown").addClass("dropdown_animtion");
  } else {
    $(".dropdown").removeClass("dropdown_animtion");
  }
});

const scrollTo = function (element) {
  $(".dropdown").removeClass("dropdown_animtion");
  $(".burger-menu").toggleClass("burger-menu--opened");
  $(".burger-menu").toggleClass("burger-menu--closed");
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(element).offset().top,
    },
    1000
  );
};

$("#descriptionMenu").on("click", function () {
  scrollTo(".description");
});
$("#skillsMenu").on("click", function () {
  scrollTo(".skills");
});
$("#contantMenu").on("click", function () {
  scrollTo(".form");
});

$("#descriptionMenuDesktop").on("click", function () {
  scrollTo(".description");
});
$("#skillsMenuDesktop").on("click", function () {
  scrollTo(".skills");
});
$("#contantMenuDesktop").on("click", function () {
  scrollTo(".topBanner");
});
