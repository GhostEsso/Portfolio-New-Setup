const form = document.querySelector('#form');
const email = document.querySelector('#mail');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  const hasUpperCase = /[A-Z]/g.test(email.value);
  const isMissingAtSign = !email.value.includes('@');

  if (hasUpperCase) {
    error.textContent = 'Email must not contain uppercase letters. (Not Sent)';
    e.preventDefault();
  } else if (isMissingAtSign) {
    error.textContent = 'The caracter @ is missing from your email.';
    e.preventDefault();
  } else {
    // reset error message
    error.textContent = '';
    // allow form submission
    return true;
  }
});