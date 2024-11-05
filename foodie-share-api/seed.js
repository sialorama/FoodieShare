const mongoose = require('mongoose');
const Recipe = require('./Recipes'); // Assurez-vous que le chemin est correct

// Remplacez par votre URI MongoDB
const mongoURI = 'mongodb://localhost:27017/foodieshare'; 

// Connexion à la base de données
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected...');
        return Recipe.deleteMany({}); // Supprimer les recettes existantes (optionnel)
    })
    .then(() => {
        const recipes = [
            {
                title: 'Spaghetti Carbonara',
                description: 'Un plat italien classique à base de pâtes, œufs et fromage.',
                ingredients: ['Spaghetti', 'Bacon', 'Œufs', 'Parmesan', 'Poivre noir'],
                steps: [
                    'Cuire les spaghetti dans une grande casserole d\'eau bouillante.',
                    'Faire cuire le bacon dans une poêle jusqu\'à ce qu\'il soit croustillant.',
                    'Dans un bol, mélanger les œufs et le parmesan.',
                    'Égoutter les spaghetti et les ajouter à la poêle avec le bacon.',
                    'Retirer du feu et ajouter le mélange d’œufs et de fromage, en remuant rapidement.',
                    'Servir avec du poivre noir.'
                ],
                comments: []
            },
            {
                title: 'Tacos de poulet',
                description: 'Tacos savoureux avec du poulet mariné et des légumes frais.',
                ingredients: ['Tortillas', 'Poulet', 'Laitue', 'Tomates', 'Avocat'],
                steps: [
                    'Mariner le poulet avec des épices.',
                    'Griller le poulet jusqu\'à ce qu\'il soit bien cuit.',
                    'Chauffer les tortillas.',
                    'Assembler les tacos avec du poulet, de la laitue, des tomates et de l\'avocat.',
                    'Servir avec une salsa ou de la crème aigre.'
                ],
                comments: []
            },
            {
                title: 'Gâteau au chocolat',
                description: 'Un gâteau riche et moelleux au chocolat.',
                ingredients: ['Farine', 'Cacao en poudre', 'Sucre', 'Beurre', 'Œufs'],
                steps: [
                    'Préchauffer le four à 180°C.',
                    'Mélanger les ingrédients secs dans un bol.',
                    'Ajouter le beurre fondu et les œufs, et bien mélanger.',
                    'Verser dans un moule et cuire au four pendant 30 minutes.',
                    'Laisser refroidir avant de servir.'
                ],
                comments: []
            }
        ];

        // Insérer les recettes dans la base de données
        return Recipe.insertMany(recipes);
    })
    .then(() => {
        console.log('Recipes seeded!');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        mongoose.connection.close();
    });
