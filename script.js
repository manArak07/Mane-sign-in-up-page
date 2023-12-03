const logInBtn = document.querySelector(".logInBtn")
const emailInput = document.querySelector(".email")
const passwordInput = document.querySelector(".password")



logInBtn.addEventListener("click", function (event) {
    event.preventDefault()
    let emailValue = emailInput.value
    let psswdValue = passwordInput.value
    
    if (!emailValue.includes("@")) {
        alert("Your email must contain @")
    }
    if(emailValue.length == 0 || psswdValue.length == 0) {
        alert("Invalid password or username. Try again!")
    }
    if (psswdValue.length < 8) {
        alert("Your password must be more than 8 characters")
    } else {
        location.href = `user/index.html?email=${emailValue}`
       
    }
    emailInput.value = ""
    passwordInput.value = ""
})