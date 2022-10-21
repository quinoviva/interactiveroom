console.log("test")
const sechand = document.querySelector("[data-seconds]")
const minhand = document.querySelector("[data-minutes]")
const hrhand = document.querySelector("[data-hours]")

function setclock(){
    console.log("clock")
    const currentDate = new Date()
    let seconds = currentDate.getSeconds()
    let minutes = currentDate.getMinutes()
    let hours = currentDate.getHours()
    console.log(seconds)
    setRotation(sechand, seconds)
    console.log(minutes)
    setRotation(minhand, minutes)
    console.log(hours)
    setRotation(hrhand, hours)
}

function setRotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation * 360)

}

setInterval(setclock, 1000)
setclock()