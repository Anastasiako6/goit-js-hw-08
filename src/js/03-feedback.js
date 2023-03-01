import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form  input');
const message = document.querySelector('.feedback-form textarea');
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);
reloadPage();


function onInputData (e) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(infSave))
}

function onFormSubmit(e) {
    e.preventDefault();
    if (email.value === '' || message.value === '') {
        return alert('Всі поля мають бути заповненні')
    } 

    console.log({ email: email.value, message: message.value });
    
    form.reset();
    localStorage.removeItem(LOCAL_KEY);
}


function reloadPage() {
  const formData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (formData) {
    email.value = formData.email;
    message.value = formData.message;
  }
}
