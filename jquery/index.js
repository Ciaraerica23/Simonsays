let buttonColors=["red","blue","green","yellow"];
let gamePat=[];
let userClickedPat=[];
let started=false;
let level=0;



function newSequence(){
  userClickedPat=[];
  let rand=Math.floor(Math.random()*4);

let randomChosenColor=buttonColors[rand];
gamePat.push(randomChosenColor);
$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
let audio=new Audio("sounds/"+randomChosenColor+".mp3");
audio.play();
level=(level+1);
  $("#level-title").text("Level "+level);
console.log(gamePat);
}
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){ $("#"+currentColor).removeClass("pressed");},100);
}


function colorPressed(){$("#"+userChosenCol).addClass("pressed");}
$(".btn").click(
function (){
let userChosenCol=$(this).attr("id");
userClickedPat.push(userChosenCol);
let audio=new Audio("sounds/"+userChosenCol+".mp3");
audio.play();

animatePress(userChosenCol);
checkAns(userClickedPat.length-1);
});
function checkAns(currentLevel){
  let audio=new Audio("sounds/wrong.mp3");
  if(gamePat[currentLevel]===userClickedPat[currentLevel]){
    console.log("success");

  if(userClickedPat.length===gamePat.length){
    setTimeout(function(){
      newSequence();
    },1000);}}
    else{audio.play();
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
  $("#level-title").text("GAME OVER click anywhere then press any key to Restart");
startOver();
}

}


$(document).keypress(function(){
  if (!started){
    $("#level-title").text("Level "+level);
    newSequence();
    started=true;
  }
});

function startOver(){
  level=0;
  gamePat=[];
  started=false;
}
