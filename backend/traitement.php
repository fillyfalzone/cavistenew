<?php   
    // Inclure le fichier de la classe ContactForm
    require_once __DIR__ . DIRECTORY_SEPARATOR . 'class' . DIRECTORY_SEPARATOR . 'ContactForm.php';

    session_start();

    // Activer les en-têtes pour le JSON    
    header('Content-Type: application/json');

    // Vérifier que le jeton CSRF est valide
    if (empty($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        http_response_code(403); // Code HTTP 403 : Accès interdit
        echo json_encode(['success' => false, 'message' => 'Jeton CSRF invalide ou absent.']);
        exit;
    }

    try {
        // Vérifier que la méthode HTTP est POST
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405); // Méthode non autorisée
            echo json_encode(['success' => false, 'message' => 'Méthode HTTP non autorisée.']);
            exit;
        }

         // Régénérer le jeton après usage
        unset($_SESSION['csrf_token']);
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
       
        // Récupérer les données du formulaire depuis $_POST
        $lastname = $_POST['lastname'] ?? null;
        $firstname = $_POST['firstname'] ?? null;
        $email = $_POST['email'] ?? null;
        $phone = isset($_POST['phone']) ? (int) $_POST['phone'] : null;
        $city = $_POST['city'] ?? null;
        $zipcode = isset($_POST['zipcode']) ? (int) $_POST['zipcode'] : null;
        $message = $_POST['message'] ?? null;
        $accept = isset($_POST['accept']) && $_POST['accept'] === 'on';

        // Créer une nouvelle instance de ContactForm
        $form = new ContactForm($lastname, $firstname, $email, $phone, $city, $zipcode, $message, $accept);

        // Vérifier si les données du formulaire sont valides
        if (!$form->isValid()) {
            // On recupère les erreurs
            $errors = $form->getErrors();
            // On convertit les erreurs, la reponse et les donnée du formulaire  en JSON
            echo json_encode(['success' => false, 'message' => 'Corriger les champs invalides', 'errors' => $errors]);
            exit;
        }

        // Envoyer un email
        if ($form->sendEmail()) {
            echo json_encode(['success' => true, 'message' => 'Votre message a bien été envoyé.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Une erreur est survenue lors de l\'envoi du message.']);
        }

    } catch (\Throwable $th) {
        // En cas d'erreur, renvoyer un message d'erreur
        http_response_code(500); // Erreur interne du serveur
        echo json_encode(['success' => false, 'message' => $th->getMessage()]);
    }
    

?>