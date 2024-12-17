<?php

    // include automatiquement les classes PHPMailer
    require '../vendor/autoload.php';

    // include automatiquement les classes Dotenv
    $dotenv = Dotenv\Dotenv::createImmutable('../');
    $dotenv->load();
    
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    class ContactForm {
        // Constantes pour les paramètres fixes
        const SUBJECT = 'Nouveau message de contact du site La Clave D\'or'; // Sujet de l'e-mail

        // Limites de longueur pour les champs
        const LIMIT_FIRSTNAME = 3;
        const LIMIT_LASTNAME = 3;
        const LIMIT_PHONE = 4;
        const LIMIT_MESSAGE = 50;
        const MAX_MESSAGE = 1000;

        // Propriétés privées pour les données du formulaire
        private string $lastname;
        private string $firstname;
        private string $email;
        private ?string $phone;
        private string $city;
        private int $zipcode;
        private string $message;
        private bool $accept;

        /**
         * Constructeur : initialise et filtre les données
         */
        public function __construct(
            string $lastname,
            string $firstname,
            string $email,
            ?string $phone,
            string $city,
            int $zipcode,
            string $message,
            bool $accept

        ) {
            // Filtrage et assignation des données
            $this->lastname = $this->sanitizeString($lastname);
            $this->firstname = $this->sanitizeString($firstname);
            $this->email = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : '';
            $this->phone = $phone ? $this->sanitizeString($phone) : null;
            $this->city = $this->sanitizeString($city);
            $this->zipcode = (int)filter_var($zipcode, FILTER_VALIDATE_INT);
            $this->message = $this->sanitizeString($message, true);
            $this->accept = filter_var($accept, FILTER_VALIDATE_BOOLEAN);
        }

        /**
         * Méthode utilitaire pour nettoyer une chaîne de caractères
         */
        private function sanitizeString(string $input, bool $allowLineBreaks = false): string {
            $flags = FILTER_FLAG_NO_ENCODE_QUOTES;
            if (!$allowLineBreaks) {
                $flags |= FILTER_FLAG_STRIP_LOW; // Empêche les caractères de contrôle
            }
            return filter_var($input, FILTER_SANITIZE_FULL_SPECIAL_CHARS, $flags);
        }

        /**
         * Vérifie si les données du formulaire sont valides
         */
        public function isValid(): bool {
            return empty($this->getErrors());
        }

        /**
         * Renvoie un tableau des erreurs de validation
         */
        public function getErrors(): array {
            $errors = [];

            // Validation des champs
            if (strlen($this->firstname) < self::LIMIT_FIRSTNAME) {
                $errors['firstname'] = "Le prénom doit contenir au moins " . self::LIMIT_FIRSTNAME . " caractères.";
            }

            if (strlen($this->lastname) < self::LIMIT_LASTNAME) {
                $errors['lastname'] = "Le nom doit contenir au moins " . self::LIMIT_LASTNAME . " caractères.";
            }

            if (!$this->email) {
                $errors['email'] = "L'adresse e-mail est invalide.";
            }

            if ($this->phone !== null && strlen((string)$this->phone) < self::LIMIT_PHONE) {
                $errors['phone'] = "Le numéro de téléphone doit contenir au moins " . self::LIMIT_PHONE . " chiffres.";
            }

            if (empty($this->city)) {
                $errors['city'] = "La ville ne peut pas être vide.";
            }

            if (!is_numeric($this->zipcode) || strlen((string)$this->zipcode) != 5) {
                $errors['zipcode'] = "Le code postal doit être composé de 5 chiffres. (Code postal francais!).";
            }

            if (strlen($this->message) < self::LIMIT_MESSAGE || strlen($this->message) > self::MAX_MESSAGE) {
                $errors['message'] = "Le message doit contenir entre " . self::LIMIT_MESSAGE . " et " . self::MAX_MESSAGE . " caractères.";
            }
            
            if (!$this->accept) {
                $errors['accept'] = "Vous devez accepter les conditions d'utilisation.";
            }

            return $errors;
        }

        /**
         * Envoie un e-mail avec les données du formulaire
         */
        public function sendEmail(): bool {

  

            // Création d'une instance de PHPMailer
            $mail = new PHPMailer(true);

            try {

                // Configuration du serveur SMTP
                $mail->isSMTP();
                $mail->Host = $_ENV['SMTP_HOST'];
                $mail->SMTPAuth = true;
                $mail->Username = $_ENV['SMTP_USERNAME'];
                $mail->Password = $_ENV['SMTP_PASSWORD'];
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port = $_ENV['SMTP_PORT'];

                // Configuration des informations d'envoi
                $mail->setFrom($_ENV['SMTP_USERNAME'], $this->firstname . ' ' . $this->lastname); // Adresse de l'expéditeur
                $mail->addAddress( $_ENV['SMTP_USERNAME']); // Adresse du destinataire
                $mail->addReplyTo($this->email); // Adresse de réponse

                // Préparation du contenu du message
                $mail->isHTML(false); // Format du message en texte brut
                $mail->Subject = self::SUBJECT; // Sujet du message
                $mail->Body = $this->composeMessage(); // Contenu du message

                // Envoi de l'e-mail
                $mail->send();
                return true;


            } catch (\Throwable $th) {

                // En cas d’erreur, lever une exception ou enregistrer l’erreur
                throw new Exception("Erreur lors de l'envoi de l'e-mail : {$mail->ErrorInfo}");
            }
        }




        /**
            * Prépare le contenu de l'e-mail
        */
        private function composeMessage(): string {
            return "Nom : {$this->lastname}\n" .
                "Prénom : {$this->firstname}\n" .
                "Email : {$this->email}\n" .
                "Téléphone : " . ($this->phone ?? 'Non renseigné') . "\n" .
                "Ville : {$this->city}\n" .
                "Code postal : {$this->zipcode}\n" .
                "Message : \n{$this->message}";
        }
    }


?>