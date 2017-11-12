$(".plus").on("click", function() {
  $( ".all").fadeOut("slow").addClass("hide");
  $(".canvas").css("background-color", "black");
  $(".canvas").css("opacity", "0.4");
  $( ".loginbutton").fadeIn("slow").removeClass("hide")
  $( ".loginbox").fadeIn("slow").removeClass("hide")
  $( ".logincredentials").fadeIn("slow").removeClass("hide")
  $( ".check").fadeIn("slow").removeClass("hide")
  $(".loginbutton").css("width", "80%");
});


$(".loginbutton").on("click", function() {
  $( ".all").fadeIn("slow").removeClass("hide");
  $(".canvas").css("background-color", "");
  $(".canvas").css("opacity", "");
  $( ".loginbutton").fadeOut("slow").addClass("hide")
  $( ".loginbox").fadeOut("slow").addClass("hide")
  $( ".logincredentials").fadeOut("slow").addClass("hide")
  $( ".check").fadeOut("slow").addClass("hide")
});