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



