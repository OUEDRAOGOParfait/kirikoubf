function generateQR() {
    // Get form values
    var cardNumber = document.getElementById('card_number').value;
    var ownerName = document.getElementById('owner_name').value;
    var lieu = document.getElementById('lieu').value;
    var email = document.getElementById('email').value;
    var issueDate = document.getElementById('issue_date').value;
    var expiryDate = document.getElementById('expiry_date').value;
    var comment = document.getElementById('comment').value;

    // Combine form data into a string
    var data = "Identifiant du: " + cardNumber + "\n";
    data += "Nom et prénom du propriétaire: " + ownerName + "\n";
    data += "Ville de residence: " + lieu + "\n";
    data += "Email: " + email + "\n";
    data += "Date de délivrance: " + issueDate + "\n";
    data += "Date d'expiration: " + expiryDate + "\n";
    data += "Identifiants et noms des utilisateurs secondaires: " + comment + "\n";

    // Generate QR code
    var qrCode = new QRCode(document.getElementById("qr-code"), {
        text: data,
        width: 200,
        height: 200
    });
}

function refreshPage() {
    location.reload(); // Actualise la page
    function resetForm() {
        // Réinitialisez les valeurs des champs de formulaire
        document.getElementById("qr-form").reset();
        
        // Rechargez la page pour actualiser le contenu
        location.reload();
    }
    
}




