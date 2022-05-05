const requireInputs = document.getElementsByClassName("require");
const errorMessageList = document.getElementById("error-message-list");
const form = document.getElementById("form");

form.onsubmit = function validateInputs(e) {

    while (errorMessageList.firstChild) { // clear old messages
        errorMessageList.removeChild(errorMessageList.firstChild);
    }
    let isValid = true;
    for (let input of requireInputs) {
        if (input.value == "") {
            isValid = false;
            const errorMessage = document.createElement("li");
            errorMessage.innerHTML = `${input.name.replace(/-/g, ' ')} is required`;
            errorMessage.style.color = "red";
            errorMessageList.appendChild(errorMessage)

        }
    }

    // validating radion buttons
    const array = ["gender", "deliver-mode", "pay", "card-type"]
    array.forEach(element => {
        const genderRadioChecked = document.querySelectorAll(`input[type='radio'][name='${element}']:checked.require`)
        const genderRadios = document.querySelectorAll(`input[type='radio'][name='${element}'].require`)

        if (genderRadios.length > 0 && genderRadioChecked.length == 0) {
            isValid = false;
            const errorMessage = document.createElement("li");
            errorMessage.innerHTML = `${element.replace(/-/g, ' ')} is required`;
            errorMessage.style.color = "red";
            errorMessageList.appendChild(errorMessage)
        }
    });

    // password at least 7 char long
    const password = document.querySelector("input[name='password'].require");
    if (password && password.value.length < 7) {
        isValid = false;
        const errorMessage = document.createElement("li");
        errorMessage.innerHTML = `password must have at least 7 characters`;
        errorMessage.style.color = "red";
        errorMessageList.appendChild(errorMessage)
    }

    const postCode = document.querySelector("input[name='post-code']");

    if (postCode && postCode.value.length != 4) {
        isValid = false;
        const errorMessage = document.createElement("li");
        errorMessage.innerHTML = `post code must have 4 characters`;
        errorMessage.style.color = "red";
        errorMessageList.appendChild(errorMessage)
    }

    return isValid; // return false denies submission
}