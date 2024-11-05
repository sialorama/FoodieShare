const Recipe = require('../models/Recipe');

// Afficher toutes les recettes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors du chargement des recettes' });
    }
};

// Afficher une recette avec l'lid
exports.getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id); // Recherche de la recette par ID
        if (!recipe) {
            return res.status(404).json({ message: 'Recette non trouvée' });
        }
        res.json(recipe);
    } catch (error) {
        console.error('Erreur lors de la récupération de la recette par ID:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Ajouter une recette
exports.createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de la recette' });
    }
};


// Supprimer une recette avec l'id
exports.deleteRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecipe = await Recipe.findByIdAndDelete(id); // Suppression de la recette par ID
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recette non trouvée' });
        }
        res.json({ message: 'Recette supprimée avec succès' });
    } catch (error) {
        console.error('Erreur lors de la suppression de la recette par ID:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

