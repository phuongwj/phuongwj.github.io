document.addEventListener("DOMContentLoaded", () => {
    const userName = document.getElementById("usertext");
    const emailAddress = document.getElementById("useremail");
    const phoneNum = document.getElementById("phonenum");
    const age = document.getElementById("userage");
    const entersth = document.getElementById("shared");
    const form = document.getElementById("theform");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let message = document.getElementById("message");
        event.preventDefault();
        if (!(userName.value.trim().charAt(0) == userName.value.trim().charAt(0).toUpperCase()))  {
            message.className = "red";
            message.innerHTML = "First letter needs to be in caps";
        } else if (!(emailAddress.value.endsWith("@dal.ca"))) {
            message.className = "red";
            message.innerHTML = "Invalid email";
        } else if (phoneNum.value.length == 10)  {
            message.className = "red";
            message.innerHTML = "Phone number length must be 10 numbers";
        }  else if (age.value < 18) {
            message.className = "red";
            message.innerHTML = "I'm sorry you're under age";
        } else if (entersth.value.length < 15) {
            message.className = "red";
            message.innerHTML = "Huh? You have nothing else to say?";
        } else if (userName.value.trim() && emailAddress.value.trim() && phoneNum.value.trim()
                    && age.value.trim() && entersth.value.trim()) {
            message.className = "green";
            message.innerHTML = "Sign up successfully!";
        } else if (!userName.value.trim() || !emailAddress.value.trim() || !phoneNum.value.trim()
                    || !age.value.trim() || !entersth.value.trim()) {
                    message.className = "red";
                    message.innerHTML = "Multiple fields missing";
        } else {
            message.innerHTML = "";
        }
    })
})
