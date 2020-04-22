var gamePattern = [];
var buttonColours =["red", "blue", "green", "yellow"];
function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // $("#yellow").fadeTo(30, 0.3 ).fadeTo(3000, 1).fadeTo(3000, 0.3 ).fadeTo(3000, 1);
  $("#"+randomChosenColour).fadeOut(50).fadeIn(50);
  playSound(randomChosenColour);

};
function playSound(color){
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();};

// $("p").click(function(){
//   // action goes here!!
// });
nextSequence();
