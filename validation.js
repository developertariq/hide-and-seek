const form = document.querySelector('#contact-me-form');
const FULLNAME_REQUIRED = 'Please enter your full name.';
const FIRSTNAME_REQUIRED = 'Please enter your first name.';
const LASTNAME_REQUIRED = 'Please enter your last name.';
const EMAIL_REQUIRED = 'Please enter your email address.';
const EMAIL_INVALID = 'Please enter a correct email address format.';

function showMessage(input, message, type) {
  const msg = document.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

function clearField() {
  form.elements.firstname.value = '';
  form.elements.lastname.value = '';
  form.elements.name.value = '';
  form.elements.email.value = '';
  form.elements.msg.value = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let fullNameValid;
  let firstNameValid;
  let lastNameValid;

  if (window.matchMedia('(max-width: 700px)').matches) {
    fullNameValid = hasValue(form.elements.name, FULLNAME_REQUIRED);
    if (!fullNameValid) return;
  } else {
    firstNameValid = hasValue(form.elements.firstname, FIRSTNAME_REQUIRED);
    if (!firstNameValid) return;
    lastNameValid = hasValue(form.elements.lastname, LASTNAME_REQUIRED);
    if (!lastNameValid) return;
  }

  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
  if (window.matchMedia('(max-width: 700px)').matches) {
    if (emailValid && fullNameValid) {
      form.submit();
      clearField();
    }
  } else if (emailValid && firstNameValid && lastNameValid) {
    form.submit();
    clearField();
  }
});