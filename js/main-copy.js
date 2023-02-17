const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const emailInput = document.getElementById('emailInput');
const pass = document.getElementById('passInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');

const button = document.querySelector('#submit');

button.addEventListener('click', (e) => {
  e.preventDefault();
  validateEmpty(
    firstName.value,
    firstName,
    firstNameError,
    'First Name cannot be empty'
  );
  validateEmpty(
    lastName.value,
    lastName,
    lastNameError,
    'Last Name cannot be empty'
  );
  validateEmail(emailInput.value, emailInput, emailError);
  validateEmpty(pass.value, pass, passError, 'Password cannot be empty');
});

function validateEmail(valueInput, divInput, divError) {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regExp.test(valueInput)) {
    hideError(divInput, divError);
  } else {
    showError(divInput, divError, 'Looks like this not an email');
  }
}

function validateEmpty(valueInput, divInput, divError, error) {
  if (valueInput.length == 0) {
    showError(divInput, divError, error);
  } else {
    hideError(divInput, divError);
  }
}

function showError(divInput, divError, error) {
  divInput.style.border = '1px solid var(--Red)';
  divError.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="" />
            <p class="error">${error}</p>`;
}

function hideError(divInput, divError) {
  divInput.style.border = '1px solid var(--Grayish-Blue)';
  divError.innerHTML = '';
}
