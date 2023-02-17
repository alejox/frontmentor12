//variables

const nameInput = document.querySelector('#firstNameInput');
const lastNameInput = document.querySelector('#lastNameInput');
const emailInput = document.querySelector('#emailInput');
const pass = document.querySelector('#passInput');
const button = document.querySelector('#submit');

//Errors variables

const nameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

//Events

button.addEventListener('click', (e) => {
  e.preventDefault();
  validateInput(
    nameInput.value,
    nameInput,
    nameError,
    'First Name cannot be empty'
  );
  validateInput(
    lastNameInput.value,
    lastNameInput,
    lastNameError,
    'Last Name cannot be empty'
  );
  validateEmail(
    emailInput.value,
    emailInput,
    emailError,
    'Looks like this not an email'
  );
  validatePass(
    pass.value,
    pass,
    passError,
    `- at least 8 characters
- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
- Can contain special characters`
  );
});

//Functions

function validateInput(valueInput, divInput, errorInput, error) {
  if (valueInput == 0) {
    showError(divInput, errorInput, error);
  } else {
    hideError(divInput, errorInput);
  }
}

function validateEmail(valueInput, divInput, errorInput, error) {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regExp.test(valueInput)) {
    divInput.style.border = '1px solid var(--Grayish-Blue)';
    errorInput.innerHTML = '';
  } else {
    divInput.style.border = '1px solid var(--Red)';
    errorInput.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="" />
            <p class="error">${error}</p>`;
  }
}

function validatePass(valueInput, divInput, errorInput, error) {
  const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  if (regExp.test(valueInput)) {
    divInput.style.border = '1px solid var(--Grayish-Blue)';
    errorInput.innerHTML = '';
  } else {
    divInput.style.border = '1px solid var(--Red)';
    errorInput.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="" />
            <p class="error">${error}</p>`;
  }
}

function showError(divInput, errorInput, error) {
  divInput.style.border = '1px solid var(--Red)';
  errorInput.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="" />
            <p class="error">${error}</p>`;
}

function hideError(divInput, errorInput) {
  divInput.style.border = '1px solid var(--Grayish-Blue)';
  errorInput.innerHTML = '';
}
