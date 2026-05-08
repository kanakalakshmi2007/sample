// script.js

function showMessage() {
    alert("Welcome to my colorful portfolio universe ✨");
}

function sendMessage() {

    const inputs = document.querySelectorAll("input, textarea");

    let isFilled = true;

    inputs.forEach(input => {
        if(input.value.trim() === "") {
            isFilled = false;
        }
    });

    if(isFilled){
        alert("Message sent successfully 🚀");
    }
    else{
        alert("Please fill all fields 🌸");
    }
}