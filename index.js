
let homescreenEl = document.getElementById('home-screen')
let guestscreenEl = document.getElementById('guest-screen')

let count1 = 0
let count2 = 0

function addOne() {
    count1 += 1
    homescreenEl.textContent = count1

}


function addTwo() {
    count1 += 2
    homescreenEl.textContent = count1
}


function addThree() {
    count1 += 3
    homescreenEl.textContent = count1
}

///////////////////////////\\\\\\\\\\\\\\\\\\\\\

function part2addOne() {
    count2 += 1
    guestscreenEl.textContent = count2
}


function part2addTwo() {
    count2 += 2
    guestscreenEl.textContent = count2
}


function part2addThree() {
    count2 += 3
    guestscreenEl.textContent = count2
}

///////////////////////////\\\\\\\\\\\\\\\\\\\\\

function resetScore() {
    homescreenEl.textContent = 0
    guestscreenEl.textContent = 0
    count1 = 0
    count2 = 0
}
