function authenticate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username ends with "@gmail.com" and the password is "password"
    if (username.endsWith('@gmail.com') && password === 'password') {
        alert('Login successful!');
        // Redirect to another page after successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}
