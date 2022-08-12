const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const sendMsgBtn = document.getElementById("sendMsgBtn")

sendMsgBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if(userName.value === "") {
        const nameError = document.querySelector(".name-error");

        return nameError.innerText = "Please input all necessary information"
    }
    else{
        document.getElementsByClassName("container").innerText = "";
        console.log(userName.value)
    }

    if(userEmail.value === "") {
        const emailError = document.querySelector(".email-error");

        return emailError.innerText = "Please input all necessary information"
    }
    else{
        console.log(userEmail.value)
    }

})

