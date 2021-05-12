//Tic Tac Toe logic
var tableData = document.querySelectorAll("td");
var button = document.querySelector("button");

var oneSpot = document.querySelector(".one");
var twoSpot = document.querySelector(".two");
var threeSpot = document.querySelector(".three");
var fourSpot = document.querySelector(".four");
var fiveSpot = document.querySelector(".five");
var sixSpot = document.querySelector(".six");
var sevenSpot = document.querySelector(".seven");
var eightSpot = document.querySelector(".eight");
var nineSpot = document.querySelector(".nine");

function xoroOnClick(inputString){
if((inputString === "<h1>X</h1>") || ( inputString === "<h1></h1>") || ( inputString === "")){return "<h1>O</h1>"}
else if(inputString === "<h1>O</h1>"){return "<h1>X</h1>"}
}


button.addEventListener("click", function(){
for (i=0;i < tableData.length; i++ ){ tableData[i].innerHTML = "";}

})


oneSpot.addEventListener("click", function(){oneSpot.innerHTML = xoroOnClick(oneSpot.innerHTML)})
twoSpot.addEventListener("click", function(){twoSpot.innerHTML = xoroOnClick(twoSpot.innerHTML)})
threeSpot.addEventListener("click", function(){threeSpot.innerHTML = xoroOnClick(threeSpot.innerHTML)})
fourSpot.addEventListener("click", function(){fourSpot.innerHTML = xoroOnClick(fourSpot.innerHTML)})
fiveSpot.addEventListener("click", function(){fiveSpot.innerHTML = xoroOnClick(fiveSpot.innerHTML)})
sixSpot.addEventListener("click", function(){sixSpot.innerHTML = xoroOnClick(sixSpot.innerHTML)})
sevenSpot.addEventListener("click", function(){sevenSpot.innerHTML = xoroOnClick(sevenSpot.innerHTML)})
eightSpot.addEventListener("click", function(){eightSpot.innerHTML = xoroOnClick(eightSpot.innerHTML)})
nineSpot.addEventListener("click", function(){nineSpot.innerHTML = xoroOnClick(nineSpot.innerHTML)})







//connect four logic

func_output = [0,6]
numberOfClicks = func_output[0]
Col_one_click_counter = func_output[1]
blueTurn = true
redTurn = false
keepPlaying = true



//alternate between blue player and red player
function gameColumeLogic(col, colCounter,numberOfClicks){

$(col+'_6' + ','+ col+'_5'+','+ col+'_4'+ ','+ col+'_3'+','+ col+'_2'+ ','+ col+'_1').click(function(){ if(blueTurn){

  $(col + '_'+colCounter ).css('background-color', 'blue');
                                        colCounter = colCounter - 1;
                                        blueTurn = false;
                                        redTurn = true;
                                        return func_output = [numberOfClicks, colCounter]}
  else if(redTurn){$(col+'_'+colCounter ).css('background-color', 'red');
                                        colCounter = colCounter - 1;
                                        blueTurn = true;
                                        redTurn = false;
                                        return func_output = [numberOfClicks, colCounter]}
})
return func_output = [numberOfClicks, colCounter]
}


function restartGame(){
    $('.conFourTable td').css({'background-color': 'Gray', 'border-radius' : '70px'});
    func_output = [0,6];
    numberOfClicks = func_output[0];
    Col_one_click_counter = func_output[1];
    blueTurn = true;
    redTurn = false;
    keepPlaying = true;

}


    $('#conFourRestart').click(restartGame);





    $('.colTwo_1').click(gameColumeLogic('.colTwo',Col_one_click_counter,numberOfClicks));
    $('.colOne_1').click(gameColumeLogic('.colOne',Col_one_click_counter,numberOfClicks));
    $('.colThree_1').click(gameColumeLogic('.colThree',Col_one_click_counter,numberOfClicks));
    $('.colFour_1').click(gameColumeLogic('.colFour',Col_one_click_counter,numberOfClicks));
    $('.colFive_1').click(gameColumeLogic('.colFive',Col_one_click_counter,numberOfClicks));
    $('.colSix_1').click(gameColumeLogic('.colSix',Col_one_click_counter,numberOfClicks));
    $('.colSeven_1').click(gameColumeLogic('.colSeven',Col_one_click_counter,numberOfClicks));
    $('.colEight_1').click(gameColumeLogic('.colEight',Col_one_click_counter,numberOfClicks));
