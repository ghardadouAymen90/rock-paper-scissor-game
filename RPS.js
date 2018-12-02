//Variables //
var userChoice;
var computer;
var win = " You Win! damn it, I hate you";
var lose = " You Lose hahahaha nothing new ";
var sameResult = " We Tied, I don't like this......";

//selectors
var winner = document.querySelector('#winner');//win icons
var loser = document.querySelector('#loser');//lost icons
var tie = document.querySelector('#tie');//tie icons
var rock = document.getElementById("rock"); // rock image
var paper = document.getElementById("paper"); // paper image
var scissors = document.getElementById("scissors"); // scissors image
var myChoice = document.getElementById("myChoice"); // user choice 
var computerChoice = document.getElementById("computerChoice"); // COMPUTER choice
var result = document.getElementById("result"); // result
var imageMe = document.querySelector(".choice-me");
var imageComputer = document.querySelector(".choice-computer");
var totalScoreMe = document.querySelector(".total-score-me");
var totalScoreComputer = document.querySelector(".total-score-computer");
totalScoreComputer.innerHTML = 0;
totalScoreMe.innerHTML = 0;


// USER'S CHOICE
rock.addEventListener("click", function () {
    userChoice = 0;
    myChoice.innerHTML = "You : Rock";
    imageMe.src = "rock.jpg"
    imageMe.style.display = 'block';
    checkComputer();
    compare();
});

paper.addEventListener("click", function () {
    userChoice = 1;
    myChoice.innerHTML = "You : Paper"
    imageMe.src = "paper.jpg";
    imageMe.style.display = 'block';
    checkComputer();
    compare();
});

scissors.addEventListener("click", function () {
    userChoice = 2;
    myChoice.innerHTML = "You : Scissors";
    imageMe.src = "scissor.jpg";
    imageMe.style.display = 'block';
    checkComputer();
    compare();
});

// COMPUTER'S CHOICE
function checkComputer() {
    // generates a random number between 0-2 
    randomNum = Math.floor(Math.random() * 3);

    // assign the random number to one of the 3 choices
    if (randomNum === 0) {
        computer = "rock";
    } else if (randomNum === 1) {
        computer = "paper";
    } else {
        computer = "scissor";
    }
}

//sound samples
var audioWinner = new Audio('http://facebook.design/public/sounds/Notification 2.mp3');
var audioLoser = new Audio('http://facebook.design/public/sounds/Alert 1.mp3');
var audioTied = new Audio('http://facebook.design/public/sounds/Notification 5.mp3');


// 3 OUTCOME
function resultsTie() {
    audioTied.play();
    result.innerHTML = sameResult;
    winner.style.display = 'none';
    loser.style.display = 'none';
    tie.style.display = 'block';
    document.querySelector(".show-hands").style.background = "linear-gradient(0deg,#ff5722,#ff8a65,#ff5722)no-repeat";

}
function resultsWinner() {
    audioWinner.play();
    result.innerHTML = win;
    winner.style.display = 'block';
    loser.style.display = 'none';
    tie.style.display = 'none';
    document.querySelector(".show-hands").style.background = "linear-gradient(225deg,#9ccc65,#00C851,#1b5e20)no-repeat";
}
function resultsLoser() {
    audioLoser.play();
    result.innerHTML = lose;
    winner.style.display = 'none';
    loser.style.display = 'block';
    tie.style.display = 'none';
    document.querySelector(".show-hands").style.background = "linear-gradient(45deg,#ff4444,#ff4444,#CC0000)no-repeat";
}

// COMPARE CHOICES OF USER VS COMPUTER

function compare() {


    // user chooses rock
    if (userChoice === randomNum) {
        resultsTie();
    } else if (userChoice === 0 && randomNum === 1) {
        resultsLoser();
        totalScoreComputer.innerHTML = Number(totalScoreComputer.innerHTML) + 1;
    } else if (userChoice === 0 && randomNum === 2) {
        resultsWinner();
        totalScoreMe.innerHTML = Number(totalScoreMe.innerHTML) + 1;

    }


    // user chooses paper  
    if (userChoice === 1 && randomNum === 0) {
        resultsWinner();
        totalScoreMe.innerHTML = Number(totalScoreMe.innerHTML) + 1;
    }
    else if (userChoice === 1 && randomNum === 2) {
        resultsLoser();
        totalScoreComputer.innerHTML = Number(totalScoreComputer.innerHTML) + 1;
    }


    // user chooses scissors
    if (userChoice === 2 && randomNum === 0) {
        resultsLoser();
        totalScoreComputer.innerHTML = Number(totalScoreComputer.innerHTML) + 1;
    } else if (userChoice === 2 && randomNum === 1) {
        resultsWinner();
        totalScoreMe.innerHTML = Number(totalScoreMe.innerHTML) + 1;
    }

    computerChoice.innerHTML = "CPE : " + computer;
    imageComputer.src = `${computer}.jpg`;
    imageComputer.style.display = 'block';

}

function CloseInstructionsWindow() {
    document.getElementById("mdl").style.display = "none";
}

function operInstructions() {
    document.getElementById("mdl").style.display = "block";
}