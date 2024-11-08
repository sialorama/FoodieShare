const mongoose = require('mongoose');

// Schéma pour les commentaires
const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence à un utilisateur
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// Schéma principal pour la recette
const recipeSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        minlength: [3, 'Le titre doit comporter au moins 3 caractères'], // Validation sur la longueur du titre
        maxlength: [100, 'Le titre ne doit pas dépasser 100 caractères'] // Limite de la longueur du titre
    },
    description: { 
        type: String, 
        maxlength: [1000, 'La description ne doit pas dépasser 1000 caractères'] // Limite de la description
    },
    ingredients: { 
        type: [String], 
        required: true, 
        validate: [array => array.length > 0, 'La liste des ingrédients ne peut pas être vide'] // Validation sur les ingrédients
    },
    steps: { 
        type: [String], 
        required: true, 
        validate: [array => array.length > 0, 'La liste des étapes ne peut pas être vide'] // Validation sur les étapes
    },
    comments: [commentSchema], // Liste des commentaires
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Auteur de la recette
}, {
    timestamps: true // Ajoute des champs `createdAt` et `updatedAt` automatiquement
});

// Création de l'index textuel pour une recherche plus rapide sur le titre
recipeSchema.index({ title: 'text' });

module.exports = mongoose.model('Recipe', recipeSchema);
