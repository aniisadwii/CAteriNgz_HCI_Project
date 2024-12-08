function validationForm() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value
    let gender = document.getElementById("gender").value
    let dob = document.getElementById("dob").value
    let terms = document.getElementById("terms").checked


    let name_check = false
    let email_check = false
    let address_check = false
    let gender_check = false
    let dob_check = false
    let terms_check = false

    // Validate Name
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
    } else {
        document.getElementById("nameError").textContent = "";
        name_check = true
    }

    // Validate Email
    if (!email.endsWith("@gmail.com")) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
    } else {
        document.getElementById("emailError").textContent = "";
        email_check = true
    }

    // Validate Address
    if (address.length < 5) {
        document.getElementById("addressError").textContent = "Address must be at least 5 characters long.";
    } else {
        document.getElementById("addressError").textContent = "";
        address_check = true
    }

    // Validate Gender
    if (gender === "") {
        document.getElementById("genderError").textContent = "Please select your gender.";
    } else {
        document.getElementById("genderError").textContent = "";
        gender_check = true;
    }

    // Validate Date of Birth
    if (new Date(dob) > new Date()) {
        document.getElementById("dobError").textContent = "Date of birth cannot be in the future.";
    } else {
        document.getElementById("dobError").textContent = "";
        dob_check = true
    }

        
    // Validate Terms
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms and conditions.";
    } else {
        terms_check = true
        if (name_check == true && email_check == true && address_check == true && gender_check == true && dob_check == true && terms_check == true) {
            alert("Form submitted successfully!");
        } else {
            alert("Please fill out all required fields correctly.");
        }
    }
    return name_check && email_check && address_check && gender_check && dob_check && terms_check;
}
        
