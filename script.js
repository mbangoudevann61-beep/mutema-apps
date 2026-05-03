// Fonction pour naviguer entre les rubriques
function afficherSection(id) {
    document.querySelectorAll('.rubrique').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Fonction pour simuler la protection par mot de passe
function verifierAcces(section) {
    let motDePasse = prompt("Veuillez entrer le code d'accès :");
    
    // Codes d'accès provisoires (à changer)
    if (section === 'projets' && motDePasse === "PROJET123") {
        afficherSection('projets');
    } else if (section === 'gestion' && motDePasse === "GESTION123") {
        afficherSection('gestion');
    } else {
        alert("Code d'accès incorrect !");
    }
}

// Fonctionnalité : Messages courts
function publierMessage() {
    const champ = document.getElementById('champ-message');
    const texte = champ.value;
    
    if(texte.trim() !== "") {
        const liste = document.getElementById('liste-messages');
        const nouveauMessage = document.createElement('li');
        nouveauMessage.textContent = texte;
        liste.prepend(nouveauMessage);
        champ.value = ""; // Vider le champ
    }
}

// Fonctionnalité : Calculateur de retard (Exemple: 100F la minute)
function calculerRetard() {
    const minutes = document.getElementById('minutes-retard').value;
    const amendeParMinute = 100; // Modifie ce montant selon vos règles
    if(minutes) {
        document.getElementById('resultat-retard').textContent = 
            `Pour ${minutes} minute(s) de retard, l'amende est de : ${minutes * amendeParMinute} Francs.`;
    }
}

// Fonctionnalité : Validation de paiement (Espace Gestion)
function validerPaiement() {
    const membre = document.getElementById('gestion-membre').value;
    const mois = document.getElementById('gestion-mois').value;
    const fond = document.getElementById('gestion-fond').value;
    const date = new Date().toLocaleDateString('fr-FR');

    // Création du texte pour l'historique
    const texteHistorique = `${date} : ${membre} a payé [${fond}] pour le mois de ${mois}.`;

    // Ajout à l'accueil
    const listeAccueil = document.getElementById('liste-historique');
    
    // Enlever le texte "Aucun paiement récent" s'il est là
    if (listeAccueil.innerHTML.includes("Aucun paiement récent")) {
        listeAccueil.innerHTML = "";
    }

    const nouvelleEntree = document.createElement('li');
    nouvelleEntree.textContent = texteHistorique;
    listeAccueil.prepend(nouvelleEntree); // Ajoute au début de la liste

    alert("Paiement validé et ajouté à l'accueil !");
    afficherSection('accueil'); // Retour à l'accueil pour voir le résultat
}
