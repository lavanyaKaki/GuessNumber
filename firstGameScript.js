let guesses = [];
correctNumber = getRandaomNUmber();

window.onload = function(){
    initGame();
    document.getElementById("number-submit").addEventListener("click",playGame);
    document.getElementById("restart-game").addEventListener("click",initGame);
    
}

function playGame(){
    let yourGuess = document.getElementById("number-guess").value;
    console.log(yourGuess);
    saveGuessHistory(yourGuess);
    displayHistory();
    displayResult(yourGuess);

}

function initGame(){
    correctNumber = getRandaomNUmber();
    guesses = [];
    displayHistory();
    resetResultContent();
}

function resetResultContent(){
   document.getElementById("result").innerHTML="";
   document.getElementById("number-guess").value="";
}

function getRandaomNUmber(){
    return Math.floor(Math.random()* 100 +1);
}

function saveGuessHistory(guess){
 guesses.unshift(guess);
 console.log(guesses);
}

function showYouWon(){
    const text = "Awesome job, you got it";
    let dialog = getDialog('won',text);
    document.getElementById("result").innerHTML= dialog;  
}

function showNumberAbove(){
    const text = "your guess is too high";
    let dialog = getDialog('warning',text);
    document.getElementById("result").innerHTML= dialog;
}

function showNumberBelow(){
    const text = "your guess is too low";
    let dialog = getDialog('warning',text);
    document.getElementById("result").innerHTML= dialog;
}

function displayResult(yourGuess){
    console.log("displayResult",correctNumber,"and", yourGuess);
    if(correctNumber > yourGuess)
        {
            showNumberBelow();
        }
    else if ( correctNumber < yourGuess)
        {
            showNumberAbove();
        }
    else if( correctNumber == yourGuess)
        {
            showYouWon();
        }
}

function getDialog(dialogType, text){
    let dialog;
    switch(dialogType)
    {
        case "warning":
            dialog = "<div class = 'alert alert-warning' role = 'alert' >"
            break;
        case "won":
            dialog = "<div class = 'alert alert-sucess' role ='alert'>"
            break;
    }
    dialog+= text;
    dialog+= "</div>";
    return dialog;
}

function displayHistory(){
    let index = 0;
    console.log("display History",guesses);
    let list = "<ul class ='list-group'>"
    while(index < guesses.length){
        console.log("at",index,"array value",guesses[index]);
        list+= "<li class ='list-group-item'>"+
        "you guessed" + guesses[index]+
        "</li>";
        index+=1;
    }
    list += "</ul>";
    document.getElementById("history").innerHTML=list;
}

