document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact-form');
    if (!form) {
        console.error('Form not found!');
        return;
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        fetch('../LA CLAVE DOR/backend/traitement.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            console.log(data); // Afficher la réponse
            if (data.success) {
                // si le formulaire est bien envoyé on affiche on recupere la div <div class="alert alert-success d-none" id="success-message"></div>
                const successMessage = document.querySelector('#success-message');
                successMessage.classList.remove('d-none');
                // on affiche le message de success
                successMessage.innerHTML = data.message;
                // on recupere le #form-container
                const formContainer = document.querySelector('#form-container');
                // on cache le formulaire
                formContainer.innerHTML = '';
                // on ajoute une div avec un jolie style contenant un lien de redirection vers la page d'accueil
                const homeLink = document.createElement('a');
                homeLink.classList.add('redirect-link', 'text-center');
                homeLink.href = '../LA CLAVE DOR/index.html';
                homeLink.textContent = 'Retour vers la page d\'accueil';
                formContainer.appendChild(homeLink);
                homeLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
            } else {
                // si le formulaire n'est pas bien envoyé on recupère la div <div class="alert alert-danger d-none" id="error-message"></div>
                const errorMessage = document.querySelector('#error-message');
                errorMessage.classList.remove('d-none');
                // on affiche le message d'erreur
                errorMessage.innerHTML = data.message;

                // on recupère les erreurs 
                const errors = data.errors;

                // Parcourir toutes les erreurs
                for (const [field, message] of Object.entries(errors)) {
                    // Trouver l'input correspondant
                    const input = document.querySelector(`[name="${field}"]`);
                    if (input) {
                        // Créer une div pour le message d'erreur
                        const errorDiv = document.createElement('div');
                        errorDiv.classList.add('invalid-tooltip');
                        errorDiv.textContent = message;

                        // Ajouter la div d'erreur à l'intérieur du conteneur parent de l'input
                        input.parentElement.appendChild(errorDiv);

                        // Ajouter la classe 'is-invalid' à l'input pour le style Bootstrap
                        input.classList.add('is-invalid');
                    }
                } 
            } 
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    });
});