import throttle from 'lodash.throttle'

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

initForm();

form.addEventListener('submit', evt => {
    evt.preventDefault();
    
    const inputValue = evt.target.email.value;
    const textareaValue = evt.target.message.value;

    if (inputValue === '' || textareaValue === '') {
        return console.log('Please fill in all the fields!');
    }

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener('input', throttle(evt => {
    let savedForm = localStorage.getItem(STORAGE_KEY);
    savedForm = savedForm ? JSON.parse(savedForm) : {};
    savedForm[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForm));
    }, 500)
);

function initForm() {
    let savedForm = localStorage.getItem(STORAGE_KEY);
    if (savedForm) {
        savedForm = JSON.parse(savedForm);
        Object.entries(savedForm).forEach(([name, value]) => {
            form.elements[name].value = value;
        });
    }
}