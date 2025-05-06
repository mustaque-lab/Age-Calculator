const ageInput = document.querySelector('.age-dob-input');
const calculateBtn = document.querySelector('.calculate-btn');
const ageResult = document.querySelector('.age-result');

calculateBtn.addEventListener('click', () => {
    if (ageInput.value === '') {
        alert('Please enter your age or date of birth');
    }
    const dob = new Date(ageInput.value);
    const today = new Date();
    const year = today.getFullYear() - dob.getFullYear();

    ageResult.innerHTML = `Your are ${year} years old.`;
});


















