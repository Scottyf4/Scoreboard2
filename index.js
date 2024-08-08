let homeCount = 0
let guestCount = 0

let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

function homePlusOne(){
    homeCount += 1
    homeScore.textContent = homeCount
}

function homePlusTwo(){
    homeCount += 2
    homeScore.textContent = homeCount
}

function homePlusThree(){
    homeCount += 3
    homeScore.textContent = homeCount
}

function guestPlusOne(){
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestPlusTwo(){
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestPlusThree(){
    guestCount += 3
    guestScore.textContent = guestCount
}

function resetGame(){
    homeCount = 0
    guestCount = 0
    
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}