var score = 0;
var result = 0;
var anchor = 0;

let reset = (integer, color) => {
  score = integer;
  for (var i = 1; i <= integer; i++) {
    $("#b" + i).css("background-color", color)
  }
  while (integer++ <= 10) {
    $("#b" + integer).css("background-color", "#86FFF7")
  }
}

$ (document).ready(function() {

  if (anchor == 0) {
    $('html, body').animate({
      scrollTop: $(".sc" + anchor).offset().top
    }, 1000);
    $("#next").html(`C'est parti !`);
    $(".chiffre").fadeOut();
    $(".selection_bar").fadeOut();
  }

  $("#next").click(function() {
    if (anchor == 11) {
      result = 0;
      anchor = -1;
      $("#next").html(`C'est parti !`);
      $(".chiffre").fadeOut();
      $(".selection_bar").fadeOut();
    } else if (anchor == 0) {
      $("#next").html(`Valider`);
      $(".chiffre").fadeIn();
      $(".selection_bar").fadeIn();
      $(".chiffre").text("0");
    }
    anchor++;
    result += score;
    if (anchor == 11) {
      $(".chiffre").fadeOut();
      $(".selection_bar").fadeOut();
      $("#result").text(result)
      $("#next").html(`Estimer une autre idée`);
    }
    $(".question").fadeOut();
    $(".question_description").fadeOut();
    $('html, body').animate({
      scrollTop: $(".sc" + anchor).offset().top
    }, 1100);
    $(".question").fadeIn();
    $(".question_description").fadeIn();
  });

  $("#b1").click(function() {
    reset(1, "red");
    $(".chiffre").css("color", "red");
    $(".chiffre").text("1");
  })
  $("#b2").click(function() {
    reset(2, "#FF3400");
    $(".chiffre").css("color", "#FF3400");
    $(".chiffre").text("2");
  })
  $("#b3").click(function() {
    reset(3, "#FF6600");
    $(".chiffre").css("color", "#FF6600");
    $(".chiffre").text("3");
  })
  $("#b4").click(function() {
    reset(4, "#FF9500");
    $(".chiffre").css("color", "#FF9500");
    $(".chiffre").text("4");
  })
  $("#b5").click(function() {
    reset(5, "#FFB000");
    $(".chiffre").css("color", "#FFB000");
    $(".chiffre").text("5");
  })
  $("#b6").click(function() {
    reset(6, "#FFCB00");
    $(".chiffre").css("color", "#FFCB00");
    $(".chiffre").text("6");
  })
  $("#b7").click(function() {
    reset(7, "#E8E200");
    $(".chiffre").css("color", "#E8E200");
    $(".chiffre").text("7");
  })
  $("#b8").click(function() {
    reset(8, "#98FF00");
    $(".chiffre").css("color", "#98FF00");
    $(".chiffre").text("8");
  })
  $("#b9").click(function() {
    reset(9, "#64FF00");
    $(".chiffre").css("color", "#64FF00");
    $(".chiffre").text("9");
  })
  $("#b10").click(function() {
    reset(10, "#18FF00");
    $(".chiffre").css("color", "#18FF00");
    $(".chiffre").text("10");
  })
})
