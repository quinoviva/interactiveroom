const sechand = document.querySelector('[data-second]')
const minhand = document.querySelector('[data-second]')
const hrhand = document.querySelector('[data-second]')

function setclock(){
    console.log("clock")
    const currentDate = new Date()
    let seconds = currentDate.getSeconds()
    let minutes = currentDate.getMinutes()
    let hours = currentDate.getHours()
    console.log(seconds)
    setrotation(sechand, seconds)
    console.log(minutes)
    setrotation(minhand, minutes)
    console.log(hours)
    setrotation(hrhand, hours)
}

function setrotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation * 360)

}

setInterval(setclock, 1000)
setclock()