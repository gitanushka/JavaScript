//generating random number
let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result.Paras');

const p = document.createElement('p')

let prevGuess =[]
let numGuess = 1

let playGame = true;

//fucntion to check if the person is allowed to play game

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

//fucntion to validate the input field whether the value is in between 1 to 100 or not

function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid number')
   }
   else if(guess < 1){
    alert('Please enter a valid number')
   }
   else if(guess > 100){
    alert('Please enter a valid number')
   }
   else{
     prevGuess.push(guess)
     if(numGuess === 11){
        updateValues(guess)
        displayMessage(`Game Over! Random number was ${randomNumber}`)
        endGame() 
    }
     else{
        updateValues(guess)
        checkGuess(guess)
     }
   }
}



//function to check whether the input number guesses is same as random number or it higher or lower
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it Right!`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOOO Low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    }
}

function updateValues(guess){
    //updating guess the number field to empty 
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    //increasing the count
    numGuess++;
    //decreasing the number of guesses remaining
    remaining.innerHTML = `${10-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

