
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginContent = document.getElementById('login-content');
const signupContent = document.getElementById('signup-content');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorDisplay = document.getElementById('error-message');

loginTab.addEventListener('click', () => {
    loginTab.style.backgroundColor = '#3498db';
    loginTab.style.color = '#fff';
    signupTab.style.backgroundColor = '#fff';
    signupTab.style.color = '#333';
    loginContent.style.display = 'block';
    signupContent.style.display = 'none';
});

signupTab.addEventListener('click', () => {
    signupTab.style.backgroundColor = '#3498db';
    signupTab.style.color = '#fff';
    loginTab.style.backgroundColor = '#fff';
    loginTab.style.color = '#333';
    signupContent.style.display = 'block';
    loginContent.style.display = 'none';
});

function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        errorDisplay.textContent = 'Passwords do not match';
        errorDisplay.style.color = 'red';
        return false;
    } else {
        errorDisplay.textContent = '';
        return true;
    }
}

document.getElementById('signup-form').addEventListener('submit', (event) => {
    if (!validatePassword()) {
        event.preventDefault(); 
    }
});
