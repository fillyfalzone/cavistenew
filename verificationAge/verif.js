// Sélectionner les éléments HTML
const ageCheckbox = document.getElementById('age-confirmation');
const enterButton = document.getElementById('enter-button');
const exitButton = document.getElementById('exit-button');
const modal = document.getElementById('age-verification-modal');

// Activer/désactiver le bouton "Entrer" selon l'état de la case "18 ans"
ageCheckbox.addEventListener('change', () => {
  enterButton.disabled = !ageCheckbox.checked;
  enterButton.style.opacity = ageCheckbox.checked ? '1' : '0.5';
  enterButton.style.cursor = ageCheckbox.checked ? 'pointer' : 'not-allowed';
});

// Bouton "Entrer"
enterButton.addEventListener('click', () => {
  if (ageCheckbox.checked) {
    // Enregistrer dans les cookies
    document.cookie = "age_verified=true; max-age=" + 60 * 60 * 24 * 30 + "; path=/; HttpOnly";

    // Enregistrer dans le localStorage
    localStorage.setItem('age_verified', 'true');

    // Masquer la modal
    modal.style.display = 'none';
  }
});

// Bouton "Quitter"
exitButton.addEventListener('click', () => {
  // Rediriger l'utilisateur vers une autre page
  window.location.href = 'https://google.com'; // Exemple : changer par '/access-denied.html'
});

// Fonction pour vérifier dans le localStorage et les cookies
function isAgeVerified() {
  // Vérifier dans le localStorage
  if (localStorage.getItem('age_verified') === 'true') {
    return true;
  }

  // Vérifier dans les cookies
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === 'age_verified' && cookie[1] === 'true') {
      return true;
    }
  }

  // Si aucune donnée n'est trouvée
  return false;
}

// Gérer l'affichage de la modal au chargement
function toggleModal() {
    if (isAgeVerified()) {
      modal.classList.remove('visible'); // Masquer la modal
    } else {
      modal.classList.add('visible'); // Afficher la modal
    }
  }

// Initialiser l'affichage de la modal
toggleModal();
