const requireInputs = document.getElementsByClassName("require");
const genderRadioBtns = document.getElementsByClassName("require");
const form = document.getElementById("form");

form.onsubmit = function validateInputs() {
    console.log("in validate func");
    let isValid = true;
    for (let input of requireInputs) {
        console.log("iterating");
        if (input.value == "") {
            console.log("found one");
            isValid = false;
            const errorMessage = document.createElement("span");
            errorMessage.innerHTML = "field is required";
            errorMessage.style.color = "red";
            input.insertAdjacentElement("afterend", errorMessage);

            setTimeout(() => errorMessage.remove(), 1500);
        }
    }

    return isValid;
}
