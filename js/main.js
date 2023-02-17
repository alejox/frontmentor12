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
  validateEmpty(firstName.value, firstName, firstNameError, 'First Name');
  validateEmpty(lastName.value, lastName, lastNameError, 'Last Name');
  validateEmail(emailInput.value, emailInput, emailError);
  validateEmpty(pass.value, pass, passError, 'Password');
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
            <p class="error">${error} cannot be empty</p>`;
}

function hideError(divInput, divError) {
  divInput.style.border = '1px solid var(--Grayish-Blue)';
  divError.innerHTML = '';
}
