const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const sendMsgBtn = document.getElementById("sendMsgBtn")

sendMsgBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const notification = document.querySelector(".notification");
    const notificationText = document.querySelector(".notification-text");
    
    if(userName.value === "") {
        return nameError.innerText = "Please input all necessary information"
    }
    else{
        nameError.innerText = "";
        console.log(userName.value)
    }
    if(userEmail.value === "") {

        return emailError.innerText = "Please input all necessary information"
    }
    else{
        emailError.innerText = "";
        console.log(userEmail.value)
    }
    if(userName.value && userEmail.value === "") {
        return nameError.innerText  = "Username is empty."
        return emailError.innerText = "Email is empty."
    }
    
    notification.classList.add("show")
    notificationText.innerText = "Your information was sent successfully"
    userEmail.value = "";
    userName.value = "";

    
})

document.querySelector(".notification-button").addEventListener("click", function(event){
    const notification = document.querySelector(".notification");
    notification.classList.remove("show");
})

