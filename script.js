let dayCounter = document.querySelector('#days')
let hourCounter = document.querySelector('#hours')
let minuteCounter = document.querySelector('#minutes')
let secondCounter = document.querySelector('#seconds')

//Timer

var myTimer = setInterval(function counting() {

    secondCounter.innerHTML--;

    if (dayCounter.innerHTML == 0 && hourCounter.innerHTML == 0 && minuteCounter.innerHTML == 0 && secondCounter.innerHTML == 0) {
        clearInterval(myTimer)
        window.alert('o prazo acabou')
    } else {

        if (hourCounter.innerHTML == 0 && minuteCounter.innerHTML == 0 && secondCounter.innerHTML == 0) {
            minuteCounter.innerHTML = 59
            secondCounter.innerHTML = 59
            hourCounter.innerHTML = 23
            dayCounter.innerHTML--
        }
        if (minuteCounter.innerHTML == 0 && secondCounter.innerHTML == 0) {
            minuteCounter.innerHTML = 59
            secondCounter.innerHTML = 59
            hourCounter.innerHTML--
        }
        if (secondCounter.innerHTML == 0) {
            minuteCounter.innerHTML--
            secondCounter.innerHTML = 59
        }
    }

}, 1000)

//HTML/CSS Modifies

function showForm() {
    let form = document.querySelector('.form')

    form.style.display = 'flex'
}

function exitForm() {
    let form = document.querySelector('.form')

    form.style.display = 'none'
}