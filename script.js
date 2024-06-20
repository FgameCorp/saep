// script.js
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TO DO: Implement authentication logic here
    // For demonstration purposes, we'll just log the credentials to the console
    console.log(`Email: ${email}, Password: ${password}`);
});
