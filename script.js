const formContainer = document.getElementById("formContainer");
const form = document.getElementById("form");
const emailInput = document.getElementById("emailInput");
const countryInput = document.getElementById("countryInput");
const zipInput = document.getElementById("zipInput");
const passwordInput = document.getElementById("passwordInput");
const submitButton = document.getElementById("submitButton");
const clearButton = document.getElementById("clearButton");
const emailError = document.querySelector("#mail + span.error");

const emailMessage = document.createElement("div");
const countryMessage = document.createElement("div");
const zipMessage = document.createElement("div");
const passwordMessage = document.createElement("div");
const loginMessage = document.createElement("div");

formContainer.append(emailMessage, countryMessage, zipMessage, passwordMessage, loginMessage);

function clearForm() {
    emailInput.value = "";
    countryInput.value = "";
    zipInput.value = "";
    passwordInput.value = "";
    // loginMessage.textContent = "";
    emailMessage.textContent = "";
    countryMessage.textContent = "";
    zipMessage.textContent = "";
    passwordMessage.textContent = "";
}

function submitForm(event) {
    event.preventDefault();

    let valid = true;
    if (!emailInput.validity.valid) {
        showEmailError();
        valid = false;
    }

    if (!countryInput.validity.valid) {
        showCountryError();
        valid = false;
    }

    if (!zipInput.validity.valid) {
        showZipError();
        valid = false;
    }

    if (!passwordInput.validity.valid) {
        showPasswordError();
        valid = false;
    }

    if (valid) {
        loginMessage.classList.add("valid");
        loginMessage.textContent = "Login Successful.";
        clearForm();
    } else {
        loginMessage.classList.add("error");
        loginMessage.textContent = "Please check all input fields.";
    }

}

emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid) {
        emailMessage.textContent = "";
    } else {
        showEmailError();
    }
});

countryInput.addEventListener("input", () => {
    if (countryInput.validity.valid) {
        countryMessage.textContent = "";
    } else {
        showCountryError();
        console.log(countryInput.value);
    }
});

zipInput.addEventListener("input", () => {
    if (zipInput.validity.valid) {
        zipMessage.textContent = "";
    } else {
        showZipError();
    }
});

passwordInput.addEventListener("input", () => {
    if (passwordInput.validity.valid) {
        passwordMessage.textContent = "";
    } else {
        showPasswordError();
    }
});

function showEmailError() {
    if (emailInput.validity.valueMissing) {
        emailMessage.classList.add("error");
        emailMessage.textContent = "Please enter an email address.";
        console.log(emailInput.value);
    } else if (emailInput.validity.typeMismatch) {
        emailMessage.classList.add("error");
        emailMessage.textContent = "Email needs to be a proper email string.";
        console.log(emailInput.value);
    } else if (emailInput.validity.tooShort) {
        emailMessage.classList.add("error");
        emailMessage.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}.`;
        console.log(emailInput.value);
    }
}

function showCountryError() {
    if (countryInput.validity.valueMissing) {
        countryMessage.classList.add("error");
        countryMessage.textContent = "Please enter a country name.";
    } else if (countryInput.validity.typeMismatch) {
        countryMessage.classList.add("error");
        countryMessage.textContent = "Country is a text field";
    } else if (countryInput.validity.tooShort) {
        countryMessage.classList.add("error");
        countryMessage.textContent = `Country should be at least ${countryInput.minLength} characters; you entered ${countryInput.value.length}.`;
    } else {
        console.log(countryInput.value.length);
        countryMessage.textContent = ""
    }
}

function showZipError() {
    if (zipInput.validity.valueMissing) {
        zipMessage.classList.add("error");
        zipMessage.textContent = "Please enter a zip code.";
    } else if (zipInput.validity.typeMismatch) {
        zipMessage.classList.add("error");
        zipMessage.textContent = "Zip code is a number field";
    } else if (zipInput.validity.tooShort) {
        zipMessage.classList.add("error");
        zipMessage.textContent = `Zipcode should be at least ${zipInput.minLength} numbers; you entered ${zipInput.value.length}.`;
    } else {
        console.log(zipInput.value.length);
        zipMessage.textContent = ""
    }
}

function showPasswordError() {
    if (passwordInput.validity.valueMissing) {
        passwordMessage.classList.add("error");
        passwordMessage.textContent = "Please enter your password.";
    } else if (passwordInput.validity.typeMismatch) {
        passwordMessage.classList.add("error");
        passwordMessage.textContent = "password is a text field";
    } else if (passwordInput.validity.tooShort) {
        passwordMessage.classList.add("error");
        passwordMessage.textContent = `Password should be at least ${passwordInput.minLength} characters; you entered ${passwordInput.value.length}.`;
    } else {
        console.log(passwordInput.value.length);
        passwordMessage.textContent = ""
    }
}

submitButton.addEventListener("click", submitForm);
clearButton.addEventListener("click", clearForm);