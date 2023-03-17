

const form = document.getElementById('#form');
const email = document.getElementById('#email');
function error(input, message) {
  const popup = document.createElement('span');
  popup.appendChild(document.createTextNode(message));
  popup.classList.add('error-message');
  input.parentNode.insertBefore(popup, input.nextElementSibling);
  popup.style.color = 'rgb(255, 0, 0)';
  popup.style.marginBottom = '5px';
  popup.style.paddingLeft = '5px';
  popup.style.top = `${input.offsetTop + input.offsetHeight}px`;
  popup.style.left = `${input.offsetLeft}px`;
}


function checkInputs() {
  const emailValue = email.value.trim();

  if (/[A-Z]/.test(emailValue)) {
    errorThrow(email, 'Please use lowercase only in email ');
  }
}

form.addEventListener('submit', (e) => {
  const errorBack = form.querySelectorAll('.error-message');
  e.preventDefault();
  errorBack.forEach((errorMessage) => {
    errorMessage.remove();
  });
  checkInputs();
  const newMessage = form.querySelectorAll('.error-message');
  if (newMessage.length === 0) {
    form.submit();
  }
});