import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();


function onFormSubmit(evt) {
    evt.preventDefault();
    
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        input.value = savedMessage.email;
        textarea.value = savedMessage.message;
    }
}