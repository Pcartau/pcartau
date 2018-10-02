var score = 0;
var result = 0;
var anchor = 0;

let reset = function(integer, color) {
  score = integer;
  for (var i = 1; i <= integer; i++) {
    $("#b" + i).css("background-color", color)
  }
  while (integer++ <= 10) {
    $("#b" + integer).css("background-color", "#D7DBD6")
  }
}

$ (document).ready(function() {

  if (anchor == 0) {
    $("#next").html(`C'est parti !`);
  }

  $("#next").click(function() {
    if (anchor == 11) {
      anchor = -1;
      $("#next").html(`C'est parti !`);
    } else if (anchor == 0) {
      $("#next").html(`Valider`);
    }
    anchor++;
    result += score;
    if (anchor == 11) {
      $("#result").text(result)
      $("#next").html(`Estimer une autre idée`);
    }
    $('html, body').animate({
      scrollTop: $(".sc" + anchor).offset().top
    }, 1000);
  });


  $("#b1").click(function() {
    reset(1, "red");
    $("#q1").css("display", "block");
  })
  $("#b2").click(function() {
    reset(2, "#FF3400");
  })
  $("#b3").click(function() {
    reset(3, "#FF6600");
  })
  $("#b4").click(function() {
    reset(4, "#FF9500");
  })
  $("#b5").click(function() {
    reset(5, "#FFB000");
  })
  $("#b6").click(function() {
    reset(6, "#FFCB00");
  })
  $("#b7").click(function() {
    reset(7, "#E8E200");
  })
  $("#b8").click(function() {
    reset(8, "#98FF00");
  })
  $("#b9").click(function() {
    reset(9, "#64FF00");
  })
  $("#b10").click(function() {
    reset(10, "#18FF00");
  })
})
