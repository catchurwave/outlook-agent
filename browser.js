const playwright = require('playwright');

async function createOutlookAccount() {
  // Lancer Chromium avec les arguments pour éviter certains problèmes sur des environnements comme Render
  const browser = await playwright.chromium.launch({
    headless: true,  // Mode headless (sans interface graphique)
    args: [
      "--disable-gpu", // Désactive l'accélération matérielle
      "--single-process" // Lance Chromium dans un seul processus (utile pour limiter la consommation de ressources)
    ]
  });

  const page = await browser.newPage(); // Crée une nouvelle page dans le navigateur

  // Étape 1 : Aller sur le site de création d'un compte Outlook
  await page.goto('https://signup.live.com');

  // Étape 2 : Remplir les informations nécessaires (exemple avec un nom, un email, un mot de passe)
  await page.fill('input[name="firstName"]', 'John');  // Remplir le prénom
  await page.fill('input[name="lastName"]', 'Doe');    // Remplir le nom de famille
  await page.fill('input[name="memberName"]', 'john.doe1234');  // Remplir l'adresse email (nom d'utilisateur)
  await page.fill('input[name="Password"]', 'Password1234!');   // Remplir le mot de passe

  // Étape 3 : Valider le formulaire
  await page.click('input[type="submit"]');  // Cliquer sur le bouton pour soumettre

  // Ajouter une petite pause pour s'assurer que la page se charge bien avant de fermer
  await page.waitForTimeout(3000); // Attente de 3 secondes

  // Fermer la page et le navigateur
  await page.close();
  await browser.close();

  return 'Compte Outlook créé avec succès !';  // Retourner un message ou des données si nécessaire
}

module.exports = { createOutlookAccount };
