document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. GESTION DE L'AFFICHAGE (Bascule Connexion / Inscription) ---
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
    const linkToSignup = document.getElementById('link-to-signup');
    const linkToLogin = document.getElementById('link-to-login');

    // Quand on clique sur "Créer un compte"
    if (linkToSignup) {
        linkToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            loginSection.style.display = 'none'; // Cache la connexion
            signupSection.style.display = 'block'; // Affiche l'inscription
        });
    }

    // Quand on clique sur "Se connecter"
    if (linkToLogin) {
        linkToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupSection.style.display = 'none'; // Cache l'inscription
            loginSection.style.display = 'block'; // Affiche la connexion
        });
    }

    // --- 2. LOGIQUE DU FORMULAIRE DE CONNEXION ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-login');
            btn.innerText = "Connexion en cours...";
            btn.style.opacity = "0.7";
            setTimeout(() => { window.location.href = "dashboard.html"; }, 1500);
        });
    }

    // --- 3. LOGIQUE DU FORMULAIRE D'INSCRIPTION ---
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-signup');
            btn.innerText = "Création de votre espace...";
            btn.style.opacity = "0.7";
            
            // Note d'expert : Dans la vraie vie, après une inscription, 
            // on redirige souvent vers les tarifs pour choisir un forfait !
            setTimeout(() => { window.location.href = "tarifs.html"; }, 1500);
        });
    }

    // --- 4. LOGIQUE DE L'IA (Page Ajouter Produit) ---
    const aiBtn = document.getElementById('btn-ai');
    if (aiBtn) {
        aiBtn.addEventListener('click', () => {
            const rawText = document.getElementById('raw-desc').value;
            if (rawText.trim() === "") return alert("Veuillez entrer une description brute d'abord !");

            aiBtn.innerText = "⏳ L'IA analyse votre produit...";
            aiBtn.style.opacity = "0.7";

            setTimeout(() => {
                document.getElementById('ai-result').style.display = 'block';
                document.getElementById('optimized-text').innerText = 
                    "🔥 [OPTIMISÉ] Découvrez le produit ultime : " + rawText + ". Conçu pour l'excellence, il transformera votre quotidien.";
                aiBtn.innerText = "✨ Texte optimisé avec succès";
                aiBtn.style.background = "#10b981";
            }, 2000);
        });
    }

    // --- 5. LOGIQUE DE PAIEMENT (Page Checkout) ---
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-pay');
            btn.innerText = "🔒 Traitement sécurisé...";
            btn.style.opacity = "0.7";

            setTimeout(() => {
                btn.innerText = "✅ Paiement Accepté !";
                btn.style.background = "#10b981";
                setTimeout(() => { window.location.href = "dashboard.html"; }, 1000);
            }, 2500);
        });
    }
});