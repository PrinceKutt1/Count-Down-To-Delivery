const countdown = () => {
  const endDate = new Date("March 10, 2022 10:00:00").getTime()
  const now = new Date().getTime()

  const difference = endDate - now

  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24
  const months = days * 30;
 
  let timeMonths = Math.floor(difference / months)
  let timeDays = Math.floor((difference % months)/days)
  let timeHours = Math.floor((difference % days) / hours)
  let timeMinutes = Math.floor((difference % hours) / minutes)
  let timeSeconds = Math.floor((difference % minutes) / seconds)

  
  timeMonths= timeMonths < 10 ? "0" + timeMonths : timeMonths

  timeHours = timeHours < 10 ? "0" + timeHours : timeHours
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

  document.getElementById("months").innerHTML = timeMonths

  document.getElementById("days").innerHTML = timeDays
  document.getElementById("hours").innerHTML = timeHours
  document.getElementById("minutes").innerHTML = timeMinutes
  document.getElementById("seconds").innerHTML = timeSeconds
}

setInterval(countdown, 1000)

const loadingSpinner = document.querySelector(".loading")
const countdownDiv = document.querySelector(".countdown")

countdownDiv.style.opacity = 0

window.addEventListener("DOMContentLoaded", () => {
  loadingSpinner.style.opacity = 0
  countdownDiv.style.opacity = 1
})
