import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaSubmit, 500));

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;

    console.log(formData)
});

populateTextarea();


function onFormSubmit(evt) {
    evt.preventDefault();
    
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaSubmit(evt) {
    const message = evt.target.value;
    
    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}