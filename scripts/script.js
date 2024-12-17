// Récupère l'ID depuis l'URL PREVENIR ARNAUD DU RAJOUT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const hash = window.location.hash.substring(1);

if (hash) {
    // Désactive toutes les sections
    document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('show', 'active'));

    // Active la section correspondante
    const activeTab = document.getElementById(hash);
    if (activeTab) {
        activeTab.classList.add('show', 'active');
    }
}




// Sélectionne l'élément contenant la liste des items du carrousel
const carouselList = document.querySelector(".carousel__list");

document.addEventListener("DOMContentLoaded", () => {
    // Insère les vidéos dans le carrousel et déclenche le clic initial sur l'élément central
    insertVideosIntoCarousel();
    simulateClickOnCenterItem();
    handleNavbarMenu();
});



// Fonction pour obtenir tous les items dynamiquement
function getCarouselItems() {
    return document.querySelectorAll(".carousel__item");
}

// Simule un clic sur l'élément ayant `data-pos="0"`
function simulateClickOnCenterItem() {
    const carouselItems = getCarouselItems();
    const centerItem = Array.from(carouselItems).find((item) => item.dataset.pos === "0");

    if (centerItem) {
        updatePositions(centerItem);
    }
}

if (carouselList) {
   // Gestionnaire d'événement sur le clic
    carouselList.addEventListener("click", (event) => {
        const clickedItem = event.target.closest(".carousel__item");
        if (!clickedItem) return;

        updatePositions(clickedItem);
    }); 
}

// Gestion des événements du swipe
let touchStartX = 0;
let touchEndX = 0;

if (carouselList) {
    carouselList.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });
    
    carouselList.addEventListener("touchend", (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });
}


// Fonction pour gérer le swipe
function handleSwipe() {
    const swipeThreshold = 50; // Seuil pour détecter un swipe (en pixels)
    if (touchEndX < touchStartX - swipeThreshold) {
        swipeToNextItem();
    } else if (touchEndX > touchStartX + swipeThreshold) {
        swipeToPreviousItem();
    }
}

// Fonction pour passer à l'item suivant lors d'un swipe
function swipeToNextItem() {
    const carouselItems = getCarouselItems();
    const nextItem = Array.from(carouselItems).find((item) => item.dataset.pos === "-1");
    if (nextItem) updatePositions(nextItem);
}

// Fonction pour revenir à l'item précédent lors d'un swipe
function swipeToPreviousItem() {
    const carouselItems = getCarouselItems();
    const previousItem = Array.from(carouselItems).find((item) => item.dataset.pos === "1");
    if (previousItem) updatePositions(previousItem);
}

// Fonction pour insérer des vidéos dans les items du carrousel
function insertVideosIntoCarousel() {

    // Tableau des chemins des vidéos
    const videoPaths = [
        "videos/video1.mp4", // Exemple de vidéo
        "videos/video2.mp4",
        "videos/video3.mp4",
    ];
    const carouselItems = getCarouselItems();

    carouselItems.forEach((item, index) => {
        if (videoPaths[index]) {
            const figure = document.createElement("figure");
            const video = document.createElement("video");
            video.src = videoPaths[index];
            video.alt = `Vidéo ${index + 1}`;
            video.muted = true; // Mettre la vidéo en muet
            video.loop = true;  // Boucle sur la vidéo
            video.preload = "auto";  // Précharge la vidéo pour éviter les délais au démarrage
            video.playsInline = true;    // Lecture en ligne pour éviter le plein écran
            video.autoplay = true;       // Lecture automatique

            figure.appendChild(video);
            item.appendChild(figure);
        } else {
            item.style.backgroundColor = "#ccc"; // Utiliser une couleur par défaut si pas de vidéo
        }
    });
}

// Met à jour les positions des items et contrôle la lecture des vidéos
function updatePositions(newActive) {
    const newActivePos = parseInt(newActive.dataset.pos, 10);
    const carouselItems = getCarouselItems();

    carouselItems.forEach((item) => {
        const currentPos = parseInt(item.dataset.pos, 10);
        const newPos = getNewPosition(currentPos, newActivePos, carouselItems.length);
        item.dataset.pos = newPos;

        const video = item.querySelector("video");

        // Si c'est l'élément central (pos = 0), on joue la vidéo
        if (newPos === 0 && video) {
            video.play();
        } else if (video) {
            video.pause(); // Met en pause les autres vidéos
        }

        // Définit la direction pour l'animation
        const direction = newPos > 0 ? 1 : -1;
        item.style.setProperty("--direction", direction);

        // Réactive pointer-events pour les items visibles
        item.style.pointerEvents = Math.abs(newPos) <= 3 ? "auto" : "none";
    });
}

// Calcule la nouvelle position d'un item donné
function getNewPosition(currentPos, activePos, totalItems) {
    const offset = currentPos - activePos;
    if (Math.abs(offset) > Math.floor(totalItems / 2)) {
        return offset > 0 ? offset - totalItems : offset + totalItems;
    }
    return offset;
}

// Gestion du menu hamburger sur mobile
function handleNavbarMenu() {
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
}

// PREVENIR ARNAUD DU RAJOUT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$(document).ready(function() {
    // Activation des dropdowns de Bootstrap
    $('.dropdown-toggle').dropdown();

    // Gestion du hover pour les dropdowns
    $('.nav-item.dropdown').hover(
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
        },
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
        }
    );

    // Gestion du clic sur les items du dropdown
    $('.dropdown-item').click(function(e) {
        e.preventDefault();
        
        // Retire la classe active de tous les liens
        $('.dropdown-item').removeClass('active');
        $('.nav-link').removeClass('active');
        
        // Ajoute la classe active au lien cliqué
        $(this).addClass('active');
        $(this).closest('.nav-item').find('.nav-link').addClass('active');
        
        // Affiche le contenu correspondant
        const target = $(this).attr('href');
        $('.tab-pane').removeClass('show active');
        $(target).addClass('show active');
    });
});






