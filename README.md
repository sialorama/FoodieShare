![logo](./foodie-share-front/src/imgs/foodieShareWide.png)

**Projet :** Plateforme de partage de recettes en ligne  
**Client :** Startup fictive **FoodieShare**  
**Objectif :** Développer une application de partage de recettes permettant aux utilisateurs de soumettre, consulter, commenter et classer des recettes.  

L'application doit inclure une interface utilisateur conviviale et un système de gestion efficace des recettes et utilisateurs.  
  
## Contexte et Description du Projet  

**FoodieShare** souhaite créer une plateforme de partage de recettes en ligne où les utilisateurs peuvent :  
* Soumettre leurs recettes,  
* Consulter les recettes disponibles,  
* Commenter et classer les recettes.  
  
L’application doit favoriser l'interaction et la communauté autour de la cuisine en ligne.
La solution doit être moderne, réactive et simple d’utilisation.  

## Prérequis  
Node.js (version 14+)  
MongoDB (configuré et en cours d'exécution)  
Postman (facultatif, pour tester l'API)  

## Installation  
Cloner le projet :  

bash
Copier le code
git clone https://github.com/username/FoodieShare.git
cd FoodieShare
Installer les dépendances du backend :

bash
Copier le code
cd backend
npm install
Configurer les variables d'environnement :

Créez un fichier .env dans le répertoire backend et ajoutez les variables d'environnement suivantes :

env
Copier le code
PORT=5000
MONGO_URI=mongodb://localhost:27017/foodie_share
JWT_SECRET=votre_secret_pour_jwt
Démarrer le backend :

bash
Copier le code
npm start
Installer les dépendances du frontend :

Si vous avez un frontend séparé (React), allez dans le répertoire frontend :

bash
Copier le code
cd ../frontend
npm install
Démarrer le frontend :

bash
Copier le code
npm run dev
Utilisation
Exemple de requête POST avec Postman pour soumettre une recette
Ouvrez Postman et créez une nouvelle requête.

Sélectionnez la méthode POST et entrez l'URL suivante : http://localhost:5000/recipes.

Ajoutez le JSON suivant dans le "Body" (sélectionnez raw et JSON comme format) :

json
Copier le code
{
    "title": "Salade César",
    "description": "Une salade savoureuse avec du poulet grillé et de la sauce César.",
    "ingredients": ["laitue romaine", "croutons", "parmesan", "sauce césar", "poulet grillé"],
    "steps": ["Coupez la laitue", "Ajoutez les croutons", "Ajoutez le poulet", "Versez la sauce César"],
    "author": "672c92b060bf95ed4506a959"
}
Envoyez la requête et vérifiez la réponse. Vous devriez recevoir un statut 201 Created avec la recette créée.

Routes de l'API
POST /recipes : Crée une nouvelle recette
GET /recipes : Récupère toutes les recettes
GET /recipes/:id : Récupère une recette spécifique par ID
DELETE /recipes/:id : Supprime une recette par ID
GET /recipes/user/:userId : Récupère toutes les recettes d'un utilisateur
Scripts utiles
Démarrer le serveur :

bash
Copier le code
npm start
Démarrer le serveur en mode développement :

bash
Copier le code
npm run dev
Contribution
Les contributions sont les bienvenues ! Veuillez ouvrir une issue avant de soumettre une pull request pour discuter des changements proposés.

## Tester l'ajout de recette avec postman:

```plaintext
{
 "title": "Gâteau au chocolat",
    "description": "Un gâteau riche et moelleux au chocolat.",
    "ingredients": ["Farine", "Cacao en poudre", "Sucre", "Beurre", "Œufs"],
    "steps": [
      "Préchauffer le four à 180°C.",
      "Mélanger les ingrédients secs dans un bol.",
      "Ajouter le beurre fondu et les œufs, et bien mélanger.",
      "Verser dans un moule et cuire au four pendant 30 minutes.",
      "Laisser refroidir avant de servir."
  ],
  "author": "672c971a6ea3fa6500f11589"
}

```

Licence
Ce projet est sous licence MIT.

## Tester l'ajout de recette avec postman:

```plaintext
{
 "title": "Gâteau au chocolat",
    "description": "Un gâteau riche et moelleux au chocolat.",
    "ingredients": ["Farine", "Cacao en poudre", "Sucre", "Beurre", "Œufs"],
    "steps": [
      "Préchauffer le four à 180°C.",
      "Mélanger les ingrédients secs dans un bol.",
      "Ajouter le beurre fondu et les œufs, et bien mélanger.",
      "Verser dans un moule et cuire au four pendant 30 minutes.",
      "Laisser refroidir avant de servir."
  ],
  "author": "672c971a6ea3fa6500f11589"
}

```
