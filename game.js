var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

// click
var userClickedPattern = []

// level
var level = 0;

//Start
var hasStarted = false;

if (!hasStarted){
   $(document).keydown(function(event){
    nextSequence();
})
hasStarted = true;
};
function nextSequence() {

  $("h1").text("Level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // $("#yellow").fadeTo(30, 0.3 ).fadeTo(3000, 1).fadeTo(3000, 0.3 ).fadeTo(3000, 1);
  $("#" + randomChosenColour).fadeOut(50).fadeIn(50);
  playSound(randomChosenColour);
  level++;
};

function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
};

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass('pressed');
  }, 100);
};

// nextSequence();

$(".btn").click(function() {
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});
