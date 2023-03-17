// Sélectionner les éléments du formulaire
const form = document.querySelector('form');
const usrInput = document.querySelector('#name');
const mailInput = document.querySelector('#mail');
const msgInput = document.querySelector('#msg');

// Créer un objet utilisateur vide


// Ajouter un gestionnaire d'événements à chaque fois que les champs sont modifiés
form.addEventListener('input', () => {
  // Mettre à jour l'objet utilisateur avec les valeurs entrées par l'utilisateur
  user.userName = usrInput.value;
  user.email = mailInput.value;
  user.msg = msgInput.value;

  // Enregistrer l'objet utilisateur dans le stockage local sous forme de chaîne JSON
  localStorage.setItem('user', JSON.stringify(user));
});

// Remplir les champs avec les valeurs enregistrées dans le stockage local (s'il y en a)
function fillFields() {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser) {
    usrInput.value = storedUser.userName;
    mailInput.value = storedUser.email;
    msgInput.value = storedUser.msg;
  }
}

fillFields();
