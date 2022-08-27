const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userSubject = document.getElementById("subject");
const userMessage = document.getElementById("message");
const sendMsgBtn = document.getElementById("sendMessageButton");

sendMsgBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const subjectError = document.querySelector("#subject-error")
    const msgError = document.querySelector("#message-error")
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
    if(userSubject.value === "") {
        return subjectError.innerText = "Please input all necessary information"
    }
    else{
        subjectError.innerText = "";
        console.log(userSubject.value)
    }
    if(userMessage.value === "") {
        return msgError.innerText = "Please input all necessary information"
    }
    else{
        msgError.innerText = "";
        console.log(userMessage.value)
    }
    if(userName.value && userEmail.value && userSubject.value && userMessage.value != "") {
        notification.classList.add("show")
        notificationText.innerText = "Your information was sent successfully"
        userEmail.value = "";
        userName.value = "";
        userMessage.value = "";
        userSubject.value = "";
    }
    
    

    
})

document.querySelector(".notification-button").addEventListener("click", function(event){
    const notification = document.querySelector(".notification");
    notification.classList.remove("show");
})