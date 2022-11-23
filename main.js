let playerCount = 0;
let computerCount = 0;
let gameRound = 1;

function getComputerChoice(){
    let x = Math.floor(Math.random()*3)
    
    if(x === 0){
        return 'Rock';
    }else if(x === 1){
        return 'Paper'
    }else{
        return 'Scissors'
    }
}
function playRound(playerSelection,computerSelection){

        playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

        if(playerSelection !== 'Rock' && playerSelection !=='Scissors' && playerSelection !== 'Paper'){
            playerCount--;
            return `"${playerSelection}" really? Your are really testing edge-cases here? Do you think I'\m a fuckin\' joke? How about you laugh about that?`
        }


        if(playerSelection === computerSelection){
            return `It\'s a motherfuckin\' draw!! ${playerSelection} equals ${computerSelection}`;

        }else if( playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper'){
            playerCount++
            return `You ugly son of a shitfaced donkey, you just won this round! ${playerSelection} beats ${computerSelection}!`
        }else {
            computerCount++
            return `It\s called Karma. And it\s pronounced HA-HA-HA-HA! You lost this round! ${computerSelection} beats ${playerSelection}`
        }
}

function game(){
    
        for( let i = 1; i < 8; i++){
        
        const playerSelection = prompt('Choose your weapon! (Rock,Paper,Scissors)'); 
        
        console.log(playRound(playerSelection,getComputerChoice()));
        console.log(playerCount + ' player score')
        console.log(computerCount + ' computer score')
        console.log(gameRound + '/5 rounds')
        gameRound++

        if(playerCount > computerCount && gameRound === 6){
            gameRound = 0;
            return 'That game that requires zero skill,fuckin\' pillock. You won the game!';
        }else if(playerCount < computerCount && gameRound === 6){
            gameRound = 0;
            return 'I\m godlike! You lost the game!!!1111';
        }else if(playerCount === computerCount && gameRound === 6){
            gameRound = 0;
            return 'I\m still the moral winner, Meaty {Boy || Girl || Divers} ! Game ends with a draw!'
        }
    }


    
}