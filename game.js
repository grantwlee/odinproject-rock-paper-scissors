function getcpuChoice(){
    let random = Math.round(Math.random()*100)
    
    if(random <= 33)
        return 'rock'
    else if(random <=66)
        return 'paper'
    else if (random <=100)
        return 'scissors'
}

function getHumanChoice(){
    let choice = prompt('Type rock, paper, or scissors to choose.').toLowerCase()
    return choice
}

function playGame(){
    
    let playerScore = 0
    let cpuScore = 0

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => {
        playRound('rock', getcpuChoice())
    });
    scissors.addEventListener('click', () => {
        playRound('scissors', getcpuChoice())}
    );
    paper.addEventListener('click', () => {
        playRound('paper', getcpuChoice())}
    );

    const score = document.createElement('div');
    score.id = 'score';
    document.querySelector('body').appendChild(score)
    
    function playRound(humanChoice, cpuChoice){
        if(humanChoice == 'rock'){
            if(cpuChoice == 'rock'){
                console.log('Tie! Rock ties rock.')
            }
            if(cpuChoice == 'paper'){
                console.log('You lose! Paper beats rock.')
                cpuScore += 1
            }
            if(cpuChoice == 'scissors'){
                console.log('You win! Rock beats scissors.')
                playerScore += 1
            }
        }

        if(humanChoice == 'paper'){
            if(cpuChoice == 'paper'){
                console.log('Tie! Paper ties paper.')
            }
            if(cpuChoice == 'scissors'){
                console.log('You lose! Scissors beats paper.')
                cpuScore += 1
            }
            if(cpuChoice == 'rock'){
                console.log('You win! Paper beats rock.')
                playerScore += 1
            }
        }

        if(humanChoice == 'scissors'){
            if(cpuChoice == 'scissors'){
                console.log('Tie! Scissors ties scissors.')
            }
            if(cpuChoice == 'rock'){
                console.log('You lose! Rock beats scissors.')
                cpuScore += 1
            }
            if(cpuChoice == 'paper'){
                console.log('You win! Scissors beats paper.')
                playerScore += 1
            }
        }

        score.textContent = `Your score: ${playerScore} Computer score: ${cpuScore} `
        if(playerScore == 5){
           score.innerHTML +=  ` Game over, you win!`
        }
        else if(cpuScore == 5){
            score.innerHTML += ` Game over, computer wins.`
        }
        return
    }
}

playGame()

