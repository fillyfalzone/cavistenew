<?php
session_start();
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Contactez-nous - La Clave d'Or</title>
    <link rel="icon" href="images/favicon-32x32.png" type="image/x-icon">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Meta essentielles pour SEO -->
    <meta name="description" content="Contactez La Clave d'Or, votre caviste à Cagnes-sur-Mer. Trouvez nos coordonnées, horaires, et formulaire pour toute question ou réservation.">
    <meta name="robots" content="index, follow">

    <!-- Balises Open Graph pour Facebook, LinkedIn et autres -->
    <meta property="og:title" content="Contactez-nous - La Clave d'Or">
    <meta property="og:description" content="Contactez La Clave d'Or pour toute question ou information sur nos produits.">
    <meta property="og:image" content="https://laclavedor.com/images/fond1.webp">
    <meta property="og:url" content="https://laclavedor.com/contact.php">
    <meta property="og:type" content="website">

    <!-- Balises Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Contactez-nous - La Clave d'Or">
    <meta name="twitter:description" content="Contactez La Clave d'Or pour toute question ou information sur nos produits.">
    <meta name="twitter:image" content="https://laclavedor.com/images/fond1.webp">
    <meta name="twitter:url" content="https://laclavedor.com/contact.php">

    <!-- CSS Files -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    <!-- CDN CSS BOOTSTRAP 5.3.3-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="snow/snow.css">
    <link rel="stylesheet" href="verificationAge/verif.css">
    <link rel="stylesheet" href="design/style.css">

    <!-- Structured Data -->
    <script src="scripts/structured-data.js"></script>
</head>


<main>
    <!-- Header -->
    <header>
        <nav class="navbar navbar-expand-md fixed-top" role="navigation">
            <div class="container"> <!-- Obligé de conserver la div pour le comportement bootstrap -->
                <!-- Logo dans la navbar -->
                <a href="index.html" aria-label="Redirection vers la page d'accueil">
                    <img src="images/logo.webp" alt="Logo de La Clave D'or" class="logo" width="60" height="60">
                </a>

                <!-- Bouton Hamburger -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7h22M4 15h22M4 23h22" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <!-- Liens de navigation -->
                <div class="collapse navbar-collapse" id="navbarMenu"> <!-- Div obligatoire logique bootstrap -->
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Accueil</a></li>
                        <li class="nav-item"><a class="nav-link" href="produits.html">Produits</a></li>
                              <li class="nav-item"><a class="nav-link" href="contact.php">Contact</a></li>
                        <li class="nav-item"><a class="nav-link" href="galerie.html">Galerie</a></li>
                    </ul>
                </div>
                
                <!-- Icône avec FontAwesome -->
                <div class="d-flex align-items-center">
                    <a href="https://maps.app.goo.gl/jmfMexmvm4U3ymgt8" class="map-link" target="_blank" aria-label="Voir la carte">
                        <i class="fa fa-map-marker-alt map-icon"></i>
                    </a> 
                    <!-- Bouton CTA -->                   
                    <a href="tel:+33658984377" class="btn btn-custom" aria-label="Appeler le 06 58 98 43 77">APPELER</a>
                </div>
            </div>
        </nav>
    </header>

        <!-- Snow fall -->
        <div id="snowfall"></div> 
        <!-- Section vidéo d'accueil immersive -->
        <section id="hero" class="hero">
            <h1 class="visually-hidden">Contactez La Clave D'or - Cave à Vin à Cagnes-sur-Mer</h1> <!-- Titre masqué pour l'accessibilité -->

            <img class="hero-video hero-video-wrapper" src="images/fond1.webp" alt="Photo de l'intérieur de La Clave D'or">

            <div class="hero-content">
                <a href="#introduction" class="btn btn-lg mt-5" aria-label="Découvrir notre histoire et nos produits">Découvrir</a> <!-- Lien vers la section "introduction" avec un label d'accessibilité -->
            </div>
        </section>    

        <!-- Section Introduction de la page produits -->
        <section id="introduction" class="discover-section container my-5">    

            <!-- Logo de l'entreprise -->
            <img src="images/logo.webp" alt="Logo de La Clave D'or" loading="lazy" width="80" height="80">
            
            <!-- TITRE SECONDAIRE -->
            <h2 class="my-5">Contactez-nous, nous somme là pour vous</h2>
            
            <p>Vous cherchez un produit en particulier, des <em>conseils sur notre sélection</em>, ou bien vous souhaitez <em>privatiser notre cave à vin</em> pour un <em>événement spécial</em> ? Nous sommes là pour vous aider à chaque étape.</p>

            <p>Que ce soit pour organiser un <em>repas d'entreprise</em>, une <em>dégustation privée</em> ou pour toute autre demande, contactez-nous directement. Nous serons ravis de vous offrir un service personnalisé, comme un caviste passionné le ferait.</p>
            
            <p>À bientôt, et souvenez-vous : le meilleur conseil, c'est celui qu'on partage autour d'un bon verre !</p>                    
        </section>

        <!-- Formulaire de contact et Newsletter -->
        <section>
            <div class="container my-5">
                <div class="row justify-content-center">
                    <!-- Formulaire de Contact -->
                    <div class="col-md-8">
                        <div class="card card-contact mb-4">
                            <div class="card-body" id="form-container">
                                <h3 class="mb-4">Contactez-nous</h3>
                                <!-- Message d'alert-->
                                <div class="alert alert-danger d-none" id="error-message"></div>
                                <div class="alert alert-success d-none" id="success-message"></div>
                                <form action="" method="post" id="contact-form" class="text-start">

                                    <!--Ajout du token CSRF-->
                                    <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">

                                    <!-- Autre champs du formulaire-->
                                    <div class="row">
                                        <div class="mb-3 col-md-6  position-relative">
                                            <label for="firstname" class="form-label">Prénom<span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="firstname" name="firstname" required autocomplete="given-name">
                                        </div>
                                        <div class="mb-3 col-md-6  position-relative">
                                            <label for="lastname" class="form-label">Nom<span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="lastname" name="lastname" required autocomplete="family-name">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-6  position-relative">
                                            <label for="email" class="form-label">Email<span class="text-danger">*</span></label>
                                            <input type="email" class="form-control" id="email" name="email" required autocomplete="email">
                                        </div>
                                        <div class="mb-3 col-md-6  position-relative">
                                            <label for="city" class="form-label">Ville<span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="city" name="city" required autocomplete="address-level2">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-6  position-relative">
                                            <label for="zipcode" class="form-label label">Code Postal<span class="text-danger">*</span></label>
                                            <input type="number" class="form-control" id="zipcode" name="zipcode" required autocomplete="postal-code">
                                        </div>
                                        <div class="mb-3 col-md-6  position-relative">
                                            <label for="phone" class="form-label">Téléphone (Optionel)</label>
                                            <input type="tel" class="form-control" id="phone" name="phone" autocomplete="tel">
                                        </div>
                                    </div>
                        
                                    <div class="row">
                                        <div class="mb-3">
                                            <label for="message" class="form-label">Message<span class="text-danger">*</span></label>
                                            <textarea class="form-control" id="message" name="message" rows="10" required></textarea>
                                        </div>
                                    </div>

                                    <div class="form-check mt-2 mb-5 position-relative">
                                        <input type="checkbox" class="form-check-input" id="accept" name="accept">
                                        <label class="form-check-label" for="accept">J'accepte les conditions d'utilisation et le traitement de mes données</label>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-lg d-block mx-auto" id="submit">Envoyer</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- Formulaire Newsletter -->
                    <div class="col-md-8 my-5">
                        <div class="newsletter-card text-center">
                            <h3 class="newsletter-card-title mb-5">Inscrivez-vous à notre Newsletter</h3>
                            <form action="URL_DU_BACKEND" method="POST" class="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                                <div class="form-group mb-3 mb-sm-0 mx-2">
                                    <label for="newsletter-email" class="sr-only">Email :</label>
                                    <input type="email" id="newsletter-email" name="email" class="form-control" placeholder="Entrez votre email" required>
                                </div>
                                <button type="submit" class="btn btn-primary mx-2">Valider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="separator"></div>

        <!-- Section des horaires et de la carte -->
        <section id="informations" class="container my-5">
            <h2 class="mb-5">Carte et Horaires</h2>
            
            <!-- Horaires d'Ouverture -->
            <h3 class="font-weight-bold mb-4 text-white">Consultez nos horaires d'ouverture</h3>
    
            <!-- Liste des horaires -->
            <div class="row justify-content-center my-5">
                <div class="col-md-6 hour-card p-4 rounded ">
                    <h3 class="hour-title">Horaires de la semaine</h3>
                    <dl class="hour-time">
                        <div class="hour-item">
                            <dt><strong>Du Lundi au Jeudi :</strong></dt>
                            <dd><time datetime="10:00-13:00">10h00 - 13h00</time> / <time datetime="16:00-20:00">16h00 - 20h00</time></dd>
                        </div>
                        <div class="hour-item">
                            <dt><strong>Vendredi et Samedi :</strong></dt>
                            <dd><time datetime="10:00-13:00">10h00 - 13h00</time> / <time datetime="16:00-22:00">16h00 - 22h00</time></dd>
                        </div>
                        <div class="hour-item">
                            <dt><strong>Dimanche :</strong></dt>
                            <dd><time datetime="10:00-13:00">10h00 - 13h00</time> (Fermé l'après-midi)</dd>
                        </div>
                    </dl>
                </div>
            </div>
        
            <!-- Contactez-nous -->
            <p class="font-weight-bold mt-3 mb-5">Contactez-nous au : <a href="tel:+33658984377" class="text-warning" aria-label="Appeler le numéro 06 58 98 43 77">06 58 98 43 77</a></p>
    
        </section> 

    </main>    

	<!-- Footer -->
    <footer class="py-4 my-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <!-- Logo et Nom -->
            <img src="images/logo.webp" class="logo-footer" loading="lazy" alt="Logo Footer" width="60" height="60">

            <!-- Liens du Footer et Réseaux Sociaux -->
            <div class="footer-links d-flex flex-column flex-md-row align-items-center">
                <div class="social-icons mb-3 mb-md-0 me-md-3">
                    <a href="https://www.instagram.com/la_clave_dor/" target="_blank" aria-label="Visitez notre page Instagram">
                        <i class="fab fa-instagram social-icon"></i>
                    </a>
                </div>                
                <a href="contact.php" class="btn btn-custom">Contact</a>
                <a href="mentions.html" class="text-white ms-md-2 me-md-3">Mentions légales</a>
                <a href="politique.html" class="text-white ms-md-2">Politique de confidentialité</a>
                <a href="Sitemap.xml" class="text-white ms-md-2">Sitemap</a>
            </div>
        </div>
        
        <!-- Avertissement sur l'alcool -->
        <div class="text-center mt-5">
            <i class="fas fa-exclamation-triangle text-warning" style="font-size: 30px;"></i>
            <p>
                <strong>La vente d'alcool est interdite aux moins de 18 ans.</strong><br>
                L'abus d'alcool est dangereux pour la santé. À consommer avec modération.
            </p>
        </div>
    </footer>

    <!-- Modal de vérification de l'âge --> 
    <div id="age-verification-modal" style="display: flex;">
        <div class="modal-card">
            <h2>Vérification d'âge</h2>
            <p>L'abus d'alcool est dangereux pour la santé. Consommez avec modération.</p>
            <ul>
                <li>L'alcool est interdit aux mineurs.</li>
                <li>Ne consommez pas d'alcool si vous devez conduire.</li>
                      
            </ul>
            <label>
                <input type="checkbox" id="age-confirmation" />
                Je confirme avoir plus de 18 ans.
            </label>
          <div class="buttons">
            <button id="enter-button" disabled style="opacity: 0.5;">Entrer</button>
            <button id="exit-button">Quitter</button>
          </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.4.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

     <!-- cdn particle js Snow fall-->
     <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
     <script src="snow/snow.js"></script>

    <!-- JS personnalisé -->
    <script src="verificationAge/verif.js"></script>
    <script src="scripts/script.js"></script>

    <!-- JS pour les formulaires -->
    <script src="scripts/contactForm.js"></script>
    
</body>
</html>
