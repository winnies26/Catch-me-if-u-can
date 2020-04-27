var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

// click
var userClickedPattern = []

// level
var level = 0;

//Start
var hasStarted = false;


$(document).keydown(function(event) {
  if (hasStarted == false) {
    nextSequence();
    hasStarted = true;
  }
})


$(".btn").click(function() {
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  hasStarted = false;
}


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    if (userClickedPattern.length == gamePattern.length) {
      console.log("Right!")

      setTimeout(function() {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
    }, 200);
    startOver();
  }

}

function nextSequence() {

  $("#level-title").text("Level " + level);
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
