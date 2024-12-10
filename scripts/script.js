document.addEventListener('DOMContentLoaded', function () {

    // On vérifie si le bouton du menu hamburger (le menu qui se cache sur mobile) existe
    const navToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.getElementById('navbarMenu');
    
    // Si le bouton et le menu existent
    if (navToggle && navMenu) {
        // On ajoute un événement pour fermer le menu si l'on clique en dehors du menu ou du bouton
        document.addEventListener("click", function(event) {
            // Si le menu est ouvert et qu'on clique en dehors
            if (navMenu.classList.contains('show') && !navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.click();  // Cela simule un clic sur le bouton pour fermer le menu
            }
        });
    }

    // Vérifie si la page est bien "index.html"
    if (window.location.pathname.includes('index.html')) {
        const mainVideo = document.querySelector('.video-main');
        const leftVideo = document.querySelector('#video-left .video-thumbnail');
        const rightVideo = document.querySelector('#video-right .video-thumbnail');

        // Fonction pour échanger les vidéos
        function swapVideos(clickedThumbnail) {
            const clickedSrc = clickedThumbnail.getAttribute('src');
            const mainSrc = mainVideo.getAttribute('src');

            // Mettre à jour la vidéo principale avec celle cliquée
            mainVideo.setAttribute('src', clickedSrc);
            mainVideo.play(); // Lecture automatique

            // Identifier la position cliquée et intervertir les sources
            if (clickedThumbnail === leftVideo) {
                leftVideo.setAttribute('src', mainSrc); // L'ancienne vidéo principale va à gauche
            } else if (clickedThumbnail === rightVideo) {
                rightVideo.setAttribute('src', mainSrc); // L'ancienne vidéo principale va à droite
            }
        }

        // Ajout des écouteurs d'événements sur les miniatures
        [leftVideo, rightVideo].forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                swapVideos(thumbnail);
            });
        });
    }
});
