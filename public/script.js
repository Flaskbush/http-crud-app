document.getElementById('toLogin').onclick = function(e) {
    e.preventDefault();
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
};

document.getElementById('toRegister').onclick = function(e) {
    e.preventDefault();
    document.getElementById('signUpForm').style.display = 'block';
    document.getElementById('signInForm').style.display = 'none';
};