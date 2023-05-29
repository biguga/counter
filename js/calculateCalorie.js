const counterResultList = document.querySelector('.counter__result-list');
const ACTIVITY_COEFFICIENTS = {
    min: 1.2,
    low: 1.375,
    medium: 1.55,
    high: 1.725,
    max: 1.9
}

const calculateCalories = ({gender, age, height, weight, activity}) => {
    let sumOfCalories;
    if (gender === 'male') {
        sumOfCalories = ACTIVITY_COEFFICIENTS[activity]*((10 * weight) + (6.25 * height) - (5 * age) + 5);
    } else {
        sumOfCalories = ACTIVITY_COEFFICIENTS[activity]*((10 * weight) + (6.25 * height) - (5 * age) - 161);
    }
    const groupsOfNorms = {
        norm: Math.round(sumOfCalories),
        minimal: Math.round(0.85*sumOfCalories),
        maximal: Math.round(1.15*sumOfCalories)
    }

    Object.keys(groupsOfNorms).forEach((groupOfNorms) => {
        document.getElementById(`calories-${groupOfNorms}`).textContent = groupsOfNorms[groupOfNorms];
    });
}

export {calculateCalories}