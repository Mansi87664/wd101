// JavaScript code
let userRegistrations = [];

const validateDateOfBirth = (dateString) => {
    const today = new Date();
    const dob = new Date(dateString);
    const age = today.getFullYear() - dob.getFullYear();
    if (age < 18 || age > 55) {
        return false;
    }
    return true;
}

const saveRegistrationForm = (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const agreedTerms = document.getElementById("agree-terms").checked;

    if (!validateDateOfBirth(dob)) {
        document.getElementById("dob-error").textContent = "Date of Birth must be between 18 and 55 years.";
        return;
    } else {
        document.getElementById("dob-error").textContent = "";
    }

    const registration = {
        fullName: fullName,
        email: email,
        dateOfBirth: dob,
        agreedTerms: agreedTerms
    }

    userRegistrations.push(registration);
    localStorage.setItem("userRegistrations", JSON.stringify(userRegistrations));
    displayRegistrations();

    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("agree-terms").checked = false;
}

const displayRegistrations = () => {
    const registrations = getStoredRegistrations();
    const tableBody = document.getElementById("entriesTableBody");
    tableBody.innerHTML = "";

    registrations.forEach((registration) => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell(0);
        const emailCell = row.insertCell(1);
        const dobCell = row.insertCell(2);
        const agreedTermsCell = row.insertCell(3);

        nameCell.textContent = registration.fullName;
        emailCell.textContent = registration.email;
        dobCell.textContent = registration.dateOfBirth;
        agreedTermsCell.textContent = registration.agreedTerms ? "Yes" : "No";
    });
}

const getStoredRegistrations = () => {
    let registrations = localStorage.getItem("userRegistrations");
    if (registrations) {
        registrations = JSON.parse(registrations);
    } else {
        registrations = [];
    }
    return registrations;
}

const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", saveRegistrationForm);

// Load and display registrations on page load
userRegistrations = getStoredRegistrations();
displayRegistrations();
