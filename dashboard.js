
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginContent = document.getElementById('login-content');
const signupContent = document.getElementById('signup-content');

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
