import { calculateCaliries } from './calculateCalorie.js';

const counterForm = document.querySelector('.counter__form');
const counterResult = document.querySelector('.counter__result');
const calculateButton = counterForm.querySelector('.form__submit-button');
const inputElements = counterForm.querySelectorAll('.input__wrapper');
const resetButton = counterForm.querySelector('.form__reset-button');

const userData = {
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activity: 'min'
};


const calorieCounterMain = () => {
    inputElements.forEach((inputElement) => {
        const inputItem = inputElement.querySelector('input');
        inputItem.addEventListener('change', () => {
            userData[inputItem.name] = inputItem.value;
            resetButton.disabled = ![userData.age, userData.height, userData.height].some((i) => i.length > 0);
            calculateButton.disabled = !Object.values(userData).every((i) => i.length > 0);
        });
    });

    counterForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        counterResult.classList.remove('counter__result--hidden');
        calculateCaliries(userData);
    });

    resetButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        document.getElementById('gender-male').checked = true;
        inputElements.forEach((inputElement) => {
            const inputItem = inputElement.querySelector('input');
            inputItem.value = ''
        });
        document.getElementById('activity-minimal').checked = true;
        resetButton.disabled = true;
        calculateButton.disabled = true;
    });
};

export { calorieCounterMain };