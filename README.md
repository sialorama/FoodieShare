![logo](./front/src/imgs/foodieShareWide.png)

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
#### Cloner le projet :  
```plaintext
git clone https://github.com/username/FoodieShare.git
cd FoodieShare
```
#### Installer les dépendances du backend :  
```plaintext
cd api
npm install
```
#### Configurer les variables d'environnement :  

Créez un fichier .env dans le répertoire backend et ajoutez les variables d'environnement suivantes :   
```plaintext
env:  
PORT=5000
MONGO_URI=mongodb://localhost:27017/foodieshare
JWT_SECRET=<votre_secret_pour_jwt> (example: e6a8b7c8e3bb41d1a4a22cba9f8301f7d75edb2cf8a2a20a111b10b0e9ecb1e9b7f1d25419f40d6db8f0191ecbba7382)
```
### Démarrer le backend :  

#### Démarrer Docker et créer le container du back:

```plaintext
cd api
docker-compose up --build -d
```

```plaintext
npm start
```
#### Installer les dépendances du frontend :  
Aller dans le répertoire frontend :  
```plaintext
cd front
npm install
```
### Démarrer le frontend :
```plaintext
npm start
```

### Utilisation dans Postman

#### La collection des différents endpoints est accessible ici:  
 ```
[https://elements.getpostman.com/redirect?entityId=36416744-0f36ec23-f80a-4a6f-aa68-3c171d873262&entityType=collection](https://elements.getpostman.com/redirect?entityId=36416744-0702c308-4b7e-409e-9f65-a3f0d8ffea60&entityType=collection)
 ```

Exemple de requête POST avec Postman pour soumettre une recette  
Ouvrez Postman et créez une nouvelle requête.  
  
Sélectionnez la méthode POST et entrez l'URL suivante : http://localhost:5000/recipes.  
  
Ajoutez le JSON suivant dans le "Body" (sélectionnez raw et JSON comme format) :  

```plaintext
{
    "title": "Salade César",
    "description": "Une salade savoureuse avec du poulet grillé et de la sauce César.",
    "ingredients": ["laitue romaine", "croutons", "parmesan", "sauce césar", "poulet grillé"],
    "steps": ["Coupez la laitue", "Ajoutez les croutons", "Ajoutez le poulet", "Versez la sauce César"],
    "author": "672c92b060bf95ed4506a959" // Remplacez ceci par l'ID réel de l'utilisateur créé
}

Envoyez la requête et vérifiez la réponse. Vous devriez recevoir un statut 201 Created avec la recette créée.
```

### Routes de l'API :  
```
POST /recipes : Crée une nouvelle recette
GET /recipes : Récupère toutes les recettes
GET /recipes/:id : Récupère une recette spécifique par ID
DELETE /recipes/:id : Supprime une recette par ID
GET /recipes/user/:userId : Récupère toutes les recettes d'un utilisateur
```

### Routes dans postman :

```plaintext
POST http://localhost:5000/users/register: Crée une nouvelle recette
GET http://localhost:5000/recipes : Récupère toutes les recettes
GET http://localhost:5000/recipes/{recipeId} : Récupère une recette spécifique par ID
DELETE http://localhost:5000/recipes/{RecipeId} : Supprime une recette par ID
GET http://localhost:5000/recipes/user/{userId}: Récupère toutes les recettes d'un utilisateur
```

### Scripts utiles
Démarrer le serveur :
```plaintext
npm start
```
## Contribution  
Les contributions sont les bienvenues ! Veuillez ouvrir une issue avant de soumettre une pull request pour discuter des changements proposés.  
  
## Licence  
Ce projet est sous licence MIT.  
