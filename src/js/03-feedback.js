const throttle = require('lodash.throttle');
const DATA_KEY = "feedback-form-state";

const ref = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
    submit: document.querySelector("button"),
}

onFillForm()

const dataForm = {}

ref.form.addEventListener("input", throttle(e => {
    dataForm[e.target.name] = e.target.value
    localStorage.setItem(DATA_KEY, JSON.stringify(dataForm))

}, 500))

ref.form.addEventListener("submit", evt => {
    evt.preventDefault();
    localStorage.removeItem(DATA_KEY);
    ref.form.reset();
    console.log(dataForm);
})

function onFillForm() {
    const storage = JSON.parse(localStorage.getItem(DATA_KEY));
    if (storage) {
        ref.input.value = storage.email
        ref.textarea.value = storage.message
    }
}
