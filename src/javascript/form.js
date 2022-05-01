$(".form_input input").on("keyup", function (e) {
  if ($(this).val().length > 0) {
    $(this).siblings(".form_input-lable").addClass("active_label");
  } else $(this).siblings(".form_input-lable").removeClass("active_label");
});

$(".form").on("submit", async function (e) {
  e.preventDefault();
  $(".shadow").addClass("active_shadow");
  $(".loader").show();
  try {
    const req = await fetch("https://birth-day-ap.herokuapp.com/protfolio", {
      method: "POST",
      body: JSON.stringify({
        name: $("#name").val(),
        email: $("#email").val(),
        company: $("#company").val(),
        reason: $("#reason").val(),
        pass: "102030405060",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await req.json();
    $(".loader").hide();
    $(".xd-message").css("display", "flex");
    if (response.error) {
      $(".xd-message-content").html(response.error);
      $(".xd-message-content").addClass("red_color");
      $(".xd-message").addClass("msg-danger");
      $(".shadow_check").hide();
      $(".shadow_close").show();
    } else {
      $(".xd-message-content").html(response.message);
      $(".xd-message-content").removeClass("red_color");
      $(".xd-message").addClass("msg-success");
      $(".shadow_check").show();
      $(".shadow_close").hide();
      $("#name").val("");
      $("#email").val("");
      $("#company").val("");
      $("#reason").val("");
      $(".form_input-lable").removeClass("active_label");
    }
    $(".shadow").addClass("active_shadow");
  } catch (error) {
    console.log("here");
    console.log(error);
  }
});

$(".xd-message-close").on("click", function () {
  $(".shadow").removeClass("active_shadow");
  $(".xd-message").css("display", "none");
});
