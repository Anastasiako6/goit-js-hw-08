import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form  input');
const message = document.querySelector('.feedback-form textarea');
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit)

function onInputData (e) {
    infSave = { email: email.value, message: message.value };
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
    const infSave = localStorage.getItem(LOCAL_KEY);
  if (infSave) {
const { email, message } = JSON.parse(formData);
    email.value = infSave.email || '';
    message.value = infSave.message || '';
  }
}
reloadPage();

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log(getFormData());
//   refs.email.value = '';
//   refs.message.value = '';
//   localStorage.removeItem(STORAGE_INPUT_KEY);
// }

// refs.form.addEventListener('submit', onFormSubmit);

// function onInput() {
//   localStorage.setItem(STORAGE_INPUT_KEY, JSON.stringify(getFormData()));
// }

// const updateStorage = throttle(onInput, 500);

// refs.form.addEventListener('input', updateStorage);

// function innitData() {
//   const formData = localStorage.getItem(STORAGE_INPUT_KEY);
//   if (formData) {
//     const { email, message } = JSON.parse(formData);
//     refs.email.value = email;
//     refs.message.value = message;
//   }
// }

// innitData();