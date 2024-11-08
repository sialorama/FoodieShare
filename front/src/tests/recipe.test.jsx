const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../../../api/server'); // Assure-toi que 'app' est exporté dans server.js
const Recipe = require('../../../api/models/recipe');
const User = require('../../../api/models/user');

// Utilise Supertest pour faire des requêtes
const request = supertest(app);

// Configuration pour Jest
beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Recipe and User Tests', () => {
    let user;
    let token;

    beforeEach(async () => {
        // Créer un utilisateur fictif pour les tests
        user = new User({
            name: 'Test User',
            email: 'test@example.com',
            password: 'password'
        });
        await user.save();

        // Simule un token d'authentification
        token = 'someauthtoken'; // Remplace par un vrai token si authentification JWT
    });

    afterEach(async () => {
        await User.deleteMany({});
        await Recipe.deleteMany({});
    });

    it('Crée une recette et l\'associe à un utilisateur', async () => {
        const newRecipe = {
            title: 'Salade César',
            description: 'Délicieuse salade avec poulet et parmesan',
            ingredients: ['Laitue', 'Poulet', 'Parmesan', 'Croutons'],
            steps: ['Laver la laitue', 'Faire griller le poulet', 'Mélanger les ingrédients']
        };

        const response = await request
            .post('/recipes')
            .send(newRecipe)
            .set('Authorization', `Bearer ${token}`);

        // Vérifier le statut et les données retournées
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.author).toBe(user._id.toString());
    });

    it('Récupère les recettes d\'un utilisateur spécifique', async () => {
        const recipe1 = new Recipe({
            title: 'Salade César',
            description: 'Délicieuse salade',
            ingredients: ['Laitue', 'Poulet', 'Parmesan'],
            steps: ['Laver la laitue', 'Mélanger'],
            author: user._id
        });

        const recipe2 = new Recipe({
            title: 'Gâteau au Chocolat',
            description: 'Moelleux et savoureux',
            ingredients: ['Chocolat', 'Farine', 'Sucre'],
            steps: ['Mélanger', 'Cuire'],
            author: user._id
        });

        await recipe1.save();
        await recipe2.save();

        const response = await request
            .get(`/recipes/user/${user._id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[0].title).toBe('Salade César');
        expect(response.body[1].title).toBe('Gâteau au Chocolat');
    });
});
