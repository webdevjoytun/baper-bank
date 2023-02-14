
// step-1: add click handler with submit btn
document.getElementById('btn-submit').addEventListener('click', function(){
//   step-2: get the value of email field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// step-3:get the value of password field
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// step:4 varify email and password
if(email === 'sontan@baap.com' && password === 'baba'){
   window.location.href = 'bank.html';
}
else{
    alert('Sorry enter invalid email or password. Please enter valid email or password');
}
})