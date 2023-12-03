const userId = document.querySelector(".userId")
const userMail = document.querySelector(".userMail")

let random = Math.random()
userId.textContent = "Your ID: " + Math.floor(random * 99999) + 10000

userMail.textContent = "Your mail: " + location.href.split("?")[1].split("=")[1]