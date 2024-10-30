document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("positionError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    const position = document.getElementById("position").value.trim();
    if (position === "") {
        document.getElementById("positionError").textContent = "Position is required.";
        isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    const phone = document.getElementById("phone").value.trim();
    if (phone === "") {
        document.getElementById("phoneError").textContent = "Phone is required.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("employeeForm").reset();
    }
});
