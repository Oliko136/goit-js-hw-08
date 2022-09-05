import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateTextarea();


function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);

    if (savedData) {
        refs.email.value = parsedData.email;
        refs.message.value = parsedData.message;
    }
    
}
