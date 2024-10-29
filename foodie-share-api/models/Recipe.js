const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    ingredients: [String],        // Liste des ingrédients
    steps: [String],              // Liste des étapes de préparation
    comments: [                   // Liste des commentaires
        {
            user: String,             // Nom de l'utilisateur qui a commenté
            message: String,          // Contenu du commentaire
            date: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('Recipe', recipeSchema);
