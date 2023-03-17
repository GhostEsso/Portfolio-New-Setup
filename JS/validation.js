const form = document.getElementById('form');
const email = document.getElementById('mail');

function error(input, message) {
  const popup = document.createElement('span');
  popup.appendChild(document.createTextNode(message));
  popup.classList.add('error-message');
  input.parentNode.insertBefore(popup, input.nextElementSibling);
  popup.style.color = 'rgb(217, 1, 21)';
  popup.style.marginBottom = '5px';
  popup.style.paddingLeft = '5px';
  popup.style.top = `${input.offsetTop + input.offsetHeight}px`;
  popup.style.left = `${input.offsetLeft}px`;
}

function checkInputs() {
  const emailValue = email.value.trim();

  if (/[A-Z]/.test(emailValue)) {
    error(email, 'Please must be in lowercase only');
  }
}

form.addEventListener('submit', (e) => {
  const newMessage = form.querySelectorAll('.error-message');
  if (newMessage) {
    newMessage.forEach((message) => {
      message.remove();
    });
  }

  checkInputs();

  const errorMessage = form.querySelectorAll('.error-message');

  if (errorMessage.length > 0) {
    e.preventDefault();
  }
});
