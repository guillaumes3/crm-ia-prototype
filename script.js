document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Logique de Connexion (login.html)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement
            const btn = document.getElementById('btn-login');
            btn.innerText = "Connexion en cours...";
            
            // Simulation d'un appel réseau de 1.5 secondes
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirection !
            }, 1500);
        });
    }

    // 2. Logique de l'IA (ajouter-produit.html)
    const aiBtn = document.getElementById('btn-ai');
    if (aiBtn) {
        aiBtn.addEventListener('click', () => {
            const rawText = document.getElementById('raw-desc').value;
            if (rawText.trim() === "") {
                alert("Veuillez entrer une description brute d'abord !");
                return;
            }

            aiBtn.innerText = "⏳ L'IA analyse votre produit...";
            aiBtn.style.opacity = "0.7";

            // Simulation du temps de réponse de ChatGPT
            setTimeout(() => {
                document.getElementById('ai-result').style.display = 'block';
                document.getElementById('optimized-text').innerText = 
                    "🔥 [OPTIMISÉ POUR VENDRE] Découvrez le produit ultime : " + rawText + ". Conçu pour l'excellence, il transformera votre quotidien. Achetez-le dès maintenant avec la livraison en 24h garantie sur toutes nos marketplaces !";
                
                aiBtn.innerText = "✨ Texte optimisé avec succès";
                aiBtn.style.background = "#10b981"; // Passe au vert
            }, 2000);
        });
    }
});