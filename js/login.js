document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var emailInput = document.getElementById('email').value.trim();
    var passInput = document.getElementById('password').value;

    var emailErr = document.getElementById('email-error');
    var passErr = document.getElementById('password-error');

    emailErr.textContent = "";
    passErr.textContent = "";

    var savedEmail = localStorage.getItem('savedEmail');
    var savedPass = localStorage.getItem('savedPassword');

    if (emailInput === "") {
        emailErr.textContent = "Email is required";
    } 
    else if (emailInput !== savedEmail) {
        emailErr.textContent = "Email not found. Please sign up.";
    } 
    else if (passInput === "") {
        passErr.textContent = "Password is required";
    } 
    else if (passInput !== savedPass) {
        passErr.textContent = "Incorrect password";
    } 
    else {
        alert("Login successful!");
        window.location.href = 'dashboard.html';
    }
});