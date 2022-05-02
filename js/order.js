const deliveryToggler = document.getElementById("delivery-toggler");
const deliveryAddressInput = document.getElementById("delivery-address-input");
const pickupToggler = document.getElementById("pickup-toggler");
const checkSameAsDelivery = document.getElementById("same-as-delivery");
const deliveryAddressBlock = document.getElementById("delivery-address-block");
const billingAddressInput = document.getElementById("billing-address-input");
const errorMessage = document.getElementById("error-message");
const checkSameAsDeliveryBlock = document.getElementById("same-as-delivery-block");
const creditCardBlock = document.getElementById("credit-card-block");
const creditRadioBtns = document.getElementsByClassName("credit-radio-btn")
const cardNumberInput = document.getElementById("card-number-input")
const cardInputs = document.getElementsByClassName("card-input")
const cardInformationInputs = document.querySelectorAll("#credit-card-block > label > input")

const payPickup = document.getElementById("pay-pickup");
const payOnline = document.getElementById("pay-online");



deliveryToggler.addEventListener("click", function showDeliverInput() {
    if (deliveryToggler.checked) {
        deliveryAddressBlock.style.display = "block"
        checkSameAsDeliveryBlock.style.display = "block"
        deliveryAddressInput.classList.add("require")
    }
});

pickupToggler.addEventListener("click", function hideDeliveryInput() {
    if (pickupToggler.checked) {
        deliveryAddressBlock.style.display = "none"
        checkSameAsDeliveryBlock.style.display = "none"
        deliveryAddressInput.classList.remove("require")
    }
});

checkSameAsDelivery.addEventListener("click", function populateBillingAddress() {
    if (deliveryAddressInput.value == null || deliveryAddressInput.value == "") {
        errorMessage.style.display = "block";
        checkSameAsDelivery.checked = false;
        setTimeout(() => errorMessage.style.display = "none", 3000);
    }

    if (deliveryAddressInput.value.length > 0) {
        billingAddressInput.value = deliveryAddressInput.value;
    }
});

payOnline.onclick = function toggleCreditCreditBlock() {
    if (payOnline.checked) {
        creditCardBlock.style.display = "block";
        for (let item of cardInformationInputs) {
            item.classList.add("require")
        }
    }
    
}

payPickup.onclick = function toggleCreditCreditBlock() {
    if (!payOnline.checked) {
        creditCardBlock.style.display = "none";
        for (let item of cardInformationInputs) {
            item.classList.remove("require")
        }
    }
}

for (let element of creditRadioBtns) {
    element.onclick = function setCreditCardMaxLength() {
        if (element.value == "amex") {
            console.log("maxlength = 15")
            cardNumberInput.setAttribute("maxlength", "15")
        }

        if (element.value != "amex") {
            console.log("maxlength = 16")
            cardNumberInput.setAttribute("maxlength", "16")
        }

        for (let input of cardInputs) {
            input.value = null;
        }
    }
}