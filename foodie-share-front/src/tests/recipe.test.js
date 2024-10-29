const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

// Connexion à la base de données MongoDB de test
beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/foodie-share-test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

// Fermer la connexion après tous les tests
afterAll(async () => {
    await mongoose.connection.close();
});

describe('Recipe Model Test', () => {
    it('Créer et sauvegarder une recette avec succès', async () => {
        const recipeData = {
            title: 'Salade César',
            description: 'Une délicieuse salade César',
            ingredients: ['Laitue', 'Croutons', 'Parmesan', 'Sauce César'],
            steps: ['Laver la laitue', 'Mélanger les ingrédients', 'Servir']
        };
        const validRecipe = new Recipe(recipeData);
        const savedRecipe = await validRecipe.save();

        // Vérifier que les données enregistrées correspondent à celles insérées
        expect(savedRecipe._id).toBeDefined();
        expect(savedRecipe.title).toBe(recipeData.title);
        expect(savedRecipe.description).toBe(recipeData.description);
        expect(savedRecipe.ingredients).toEqual(expect.arrayContaining(recipeData.ingredients));
        expect(savedRecipe.steps).toEqual(expect.arrayContaining(recipeData.steps));
    });

    it('Ajouter un commentaire à une recette', async () => {
        const recipe = await Recipe.findOne({ title: 'Salade César' });
        const comment = { user: 'TestUser', message: 'Très bon!' };
        recipe.comments.push(comment);
        const updatedRecipe = await recipe.save();

        expect(updatedRecipe.comments[0].user).toBe(comment.user);
        expect(updatedRecipe.comments[0].message).toBe(comment.message);
    });
});
