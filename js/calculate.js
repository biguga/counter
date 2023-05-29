import { calculateCaliries } from './calculateCalorie.js';

const counterForm = document.querySelector('.counter__form');
const counterResult = document.querySelector('.counter__result');
const calculateButton = counterForm.querySelector('.form__submit-button');
const inputElements = counterForm.querySelectorAll('.input__wrapper');
const resetButton = counterForm.querySelector('.form__reset-button');
const physicalActivityList = counterForm.querySelector('.radios-group');
const physicalActivityRadios= physicalActivityList.querySelectorAll('input');
const genderList = counterForm.querySelector('.switcher');
const genderRadios= genderList.querySelectorAll('input[type=radio]');

const userData = {
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activity: 'min'
};


const countCalories = () => {
    inputElements.forEach((inputElement) => {
        const inputItem = inputElement.querySelector('input');
        inputItem.addEventListener('change', () => {
            userData[inputItem.name] = inputItem.value;
            resetButton.disabled = ![userData.age, userData.height, userData.height].some((i) => i.length > 0);
            calculateButton.disabled = !Object.values(userData).every((i) => i.length > 0);
        });
    });

    physicalActivityRadios.forEach((physicalActivityRadio) => {
        physicalActivityRadio.addEventListener('change', () => {
            if (physicalActivityRadio.checked === true) {
                userData.activity = physicalActivityRadio.value;
            };
        });
    });

    genderRadios.forEach((genderRadio) => {
        genderRadio.addEventListener('change', () => {
            if (genderRadio.checked === true) {
                userData.gender = genderRadio.value;
            };
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
        counterResult.classList.add('counter__result--hidden');
        resetButton.disabled = true;
        calculateButton.disabled = true;
    });
};

export { countCalories };