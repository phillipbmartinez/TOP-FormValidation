const formContainer = document.getElementById("formContainer");
const form = document.getElementById("form");
const emailInput = document.getElementById("emailInput");
const countryInput = document.getElementById("countryInput");
const zipInput = document.getElementById("zipInput");
const passwordInput = document.getElementById("passwordInput");
const submitButton = document.getElementById("submitButton");
const clearButton = document.getElementById("clearButton");
const emailError = document.querySelector("#mail + span.error");

const loginMessage = document.createElement("div");
formContainer.appendChild(loginMessage);

function clearForm() {
    emailInput.value = "";
    countryInput.value = "";
    zipInput.value = "";
    passwordInput.value = "";
    loginMessage.textContent = "";
}

submitButton.addEventListener("click", submitForm);
clearButton.addEventListener("click", clearForm);

function submitForm() {
    emailInput.value = "";
    countryInput.value = "";
    zipInput.value = "";
    passwordInput.value = "";
    loginMessage.classList.remove("error");
    loginMessage.classList.add("valid");
    loginMessage.textContent = "Login Successful."
    formContainer.appendChild(loginMessage);
}

emailInput.addEventListener("input", (event) => {
    if (emailInput.validity.valid) {
        loginMessage.textContent = "";
    } else {
        showError();
    }
});

countryInput.addEventListener("input", (event) => {
    if (countryInput.validity.valid) {
        loginMessage.textContent = "";
    } else {
        showError();
    }
});

zipInput.addEventListener("input", (event) => {
    if (zipInput.validity.valid) {
        loginMessage.textContent = "";
    } else {
        showError();
    }
});

passwordInput.addEventListener("input", (event) => {
    if (passwordInput.validity.valid) {
        loginMessage.textContent = "";
    } else {
        showError();
    }
});

submitButton.addEventListener("submit", (event) => {
    if (!emailInput.validity.valid || !countryInput.validity.valid || zipInput.validity.valid || passwordInput.validity.valid) {
        showError();
        event.preventDefault();
    }
})

function showError() {
    if (emailInput.validity.valueMissing) {
        loginMessage.classList.add("error");
        loginMessage.textContent = "Please enter an email address.";
    } else if (emailInput.validity.typeMismatch) {
        loginMessage.classList.add("error");
        loginMessage.textContent = "Entered value needs to be an email.";
    } else if (emailInput.validity.tooShort) {
        loginMessage.classList.add("error");
        loginMessage.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}.`;
    }
}

