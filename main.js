const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const buttons = document.querySelectorAll('.bottom button');

const playerImg = document.querySelector('.playerImg');
const computerImg =document.querySelector('.computerImg');

const answerText = document.querySelector('#answerText');

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const gameRound = document.querySelector('.gameRound');

const main = document.querySelector('main');


const endCard = document.createElement('div');
endCard.setAttribute('class','endCard');

const endText = document.createElement('p');
endText.setAttribute('id','endText');


const btnReset = document.createElement('button');
btnReset.setAttribute('class','reset');

btnReset.textContent ='Reset';

endCard.appendChild(endText);
endCard.appendChild(btnReset);


let playerCount = 0;
let computerCount = 0;
let round = 0;
let playerSelection ='';

rockBtn.addEventListener('click', () => {
    playerSelection ='Rock';
    playerImg.src = './images/rock.jpg';

})
paperBtn.addEventListener('click', () => {
    playerSelection = 'Paper';
    playerImg.src = './images/paper.jpg';
})
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'Scissors';
    playerImg.src = './images/scissors.jpg';
})

buttons.forEach(button =>{

    button.addEventListener('click',game);
    button.disabled=false;
})

btnReset.addEventListener('click', () => {
    playerCount = 0;
    computerCount = 0;
    round = 0;
    playerScore.textContent= 0;
    computerScore.textContent=0;
    gameRound.textContent = 'Round 0 of 10';
    answerText.textContent = 'You\'re about to be the immediate past president of the being alive club.';
    main.removeChild(endCard);
    
    for ( let i = 0; i < buttons.length;i++){
        buttons[i].disabled = false;
    }
    
})

function getComputerChoice(){
    const x = Math.floor(Math.random()*3)

    switch(x){
            case 0 : computerImg.src = './images/rockVictory.jpg';
                    return 'Rock';
            case 1 : computerImg.src = './images/paper.jpg';
                    return 'Paper';
            case 2 : computerImg.src = './images/scissors.jpg';
            return 'Scissors';
        }
    }

function game(){

        playRound(playerSelection,getComputerChoice());
        
        playerScore.textContent = playerCount;
        computerScore.textContent = computerCount;
        round++;
        gameRound.textContent= `Round ${round} of 10`;
    
    if(playerCount > computerCount && round === 10){

        
        endText.textContent = ' Congrats on winning a game that requires zero skill,heckin\' pillock.';
        endFunction()

    }else if(playerCount < computerCount && round === 10){

        
        endText.textContent =  'This AI is the beginning of the end of Humanity! You lost the game!!!';
        endFunction()
        
    }else if(playerCount === computerCount && round === 10){
  
        endText.textContent =  'I\m still claiming this win, Meaty Boy! Game ends with a draw!';
        endFunction()
    } 
}


function playRound(playerSelection,computerSelection){
    
    
    if(playerSelection === computerSelection){
        
        answerText.textContent = 'It\'s a heckin\' draw!!' +'\n' + `${playerSelection} equals ${computerSelection}`;

    }else if(playerSelection === 'Rock' && computerSelection === 'Scissors' || 
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper')   {

        playerCount++
        answerText.textContent = rdmWin() + '\n' + `${playerSelection} beats ${computerSelection}!`
            
    }else {
        computerCount++
        answerText.textContent =  rdmLose() +'\n' + `${computerSelection} beats ${playerSelection}!`
        }
}

function endFunction(){

    for ( let i = 0; i < buttons.length;i++){
        buttons[i].disabled = true;
   }
    main.appendChild(endCard);
    playerImg.src = './images/rps.jpg';
    computerImg.src = './images/rps.jpg'; 
}


function rdmWin(){
    const idx = Math.floor(Math.random()*loseAnswers.length);

    return loseAnswers[idx]
}
function rdmLose(){
    const idx = Math.floor(Math.random()*winAnswers.length);

    return winAnswers[idx]
}




const winAnswers = ['It\'s not about winning and losing. You know who says that? The loser.','It\'s not whether you win or lose, it\'s how you play the game, according to the losers.','Victory has a hundred fathers, but defeat is an orphan, and you are Harry Potter.','If it doesn\'t matter who wins or loses, then why do they keep score? That is one point for me.','It\'s called Karma. And it\s pronounced HA-HA-HA-HA! You lost this round!','Prepare yourself. Sore loser cheating allegations are coming.'];

const loseAnswers = ['I\'m as happy as I can be – but I have been happier.','It\'s not whether you win or lose, it\'s how you place the blame. So you better take it.','You ugly son of a left-alone donkey, you just won this round!','Every win is an injustice to someone, hope you feel bad now.'];

