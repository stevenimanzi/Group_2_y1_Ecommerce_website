document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('fullname').value.trim();
    var regNo = document.getElementById('student-id').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var pass = document.getElementById('password').value;

    document.getElementById('fullname-error').textContent = "";
    document.getElementById('student-id-error').textContent = "";
    document.getElementById('email-error').textContent = "";
    document.getElementById('phone-error').textContent = "";
    document.getElementById('password-error').textContent = "";

    if (name === "") {
        document.getElementById('fullname-error').textContent = "Full name is required";
        return;
    }
    if (name.length < 3) {
        document.getElementById('fullname-error').textContent = "Name is too short";
        return;
    }

    if (regNo === "") {
        document.getElementById('student-id-error').textContent = "Registration number is required";
        return;
    }
    if (regNo.indexOf('25RP') !== 0) {
        document.getElementById('student-id-error').textContent = "Must start with 25RP";
        return;
    }

    if (email === "") {
        document.getElementById('email-error').textContent = "Email is required";
        return;
    }
    if (email.indexOf('@') === -1) {
        document.getElementById('email-error').textContent = "Invalid email format";
        return;
    }

    if (phone === "") {
        document.getElementById('phone-error').textContent = "Phone number is required";
        return;
    }
    if (phone.length < 10) {
        document.getElementById('phone-error').textContent = "Enter a valid phone number";
        return;
    }

    if (pass === "") {
        document.getElementById('password-error').textContent = "Password is required";
        return;
    }
    if (pass.length < 8) {
        document.getElementById('password-error').textContent = "Minimum 8 characters";
        return;
    }

    localStorage.setItem('savedEmail', email);
    localStorage.setItem('savedPassword', pass);
    localStorage.setItem('userName', name);

    alert("Registration Successful!");
    window.location.href = 'login.html';
});