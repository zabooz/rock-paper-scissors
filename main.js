let playerCount = 0;
let computerCount = 0;
let round = 0;
let playerSelection ='';

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


const backGroundBlur = document.createElement('div')
backGroundBlur.setAttribute('class','backGroundBlur')

const main = document.querySelector('main');
main.appendChild(backGroundBlur)

const endCard = document.createElement('div');
endCard.setAttribute('class','endCard');

const btnReset = document.createElement('button');
btnReset.setAttribute('class','reset');
btnReset.textContent ='Reset';
endCard.appendChild(btnReset);



rockBtn.addEventListener('click', () => {
    playerSelection ='Rock';
    playerImg.src = './images/rock.jpg'
})
paperBtn.addEventListener('click', () => {
    playerSelection = 'Paper';
    playerImg.src = './images/paper.jpg'
})
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'Scissors';
    playerImg.src = './images/scissors.jpg'
})

buttons.forEach(button =>{
    button.addEventListener('click',game)
})

btnReset.addEventListener('click', () => {
    playerCount = 0;
    computerCount = 0;
    round = 0;


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


        // playerSelection = prompt('Choose your Weapon','')

        playRound(playerSelection,getComputerChoice());

        // console.log(playerSelection)
        // console.log(playRound(playerSelection,getComputerChoice()));

        // console.log(playerCount + ' player score')
        // console.log(computerCount + ' computer score')
        // console.log(round + '/10 rounds');

        playerScore.textContent = playerCount;
        computerScore.textContent = computerCount;
        round++;
        gameRound.textContent= `Round ${round} of 10`;
    
    if(playerCount > computerCount && round === 10){

        main.appendChild(endCard);



        return ' Congrats on winning a game that requires zero skill,heckin\' pillock. You won the game!';
    }else if(playerCount < computerCount && round === 10){
        main.appendChild(endCard);

        return 'I\m godlike! You lost the game!!!1111';
    }else if(playerCount === computerCount && round === 10){
        main.appendChild(endCard);

        return 'I\m still claiming this win, Meaty Boy! Game ends with a draw!'
    } 
}


function playRound(playerSelection,computerSelection){
    
    
    if(playerSelection === computerSelection){

            answerText.textContent = 'It\'s a heckin\' draw!!' +'\n' + `${playerSelection} equals ${computerSelection}`;

    }else if(playerSelection === 'Rock' && computerSelection === 'Scissors' || 
            playerSelection === 'Paper' && computerSelection === 'Rock' ||
            playerSelection === 'Scissors' && computerSelection === 'Paper')   {

            playerCount++
            answerText.textContent = `You ugly son of a shitfaced donkey, you just won this round!` + '\n' + `${playerSelection} beats ${computerSelection}!`
            
        }else {
            computerCount++
            answerText.textContent =  `It\'s called Karma. And it\s pronounced HA-HA-HA-HA! You lost this round!` +'\n' + `${computerSelection} beats ${playerSelection}!`
        }
}