const Recipe = require('../models/recipe');

// Ajouter une recette
exports.createRecipe = async (req, res) => {
    console.log(req.body);  // Vérifier les données reçues

    const { title, description, ingredients, steps, author } = req.body;

    // Validation des champs
    if (!title || !description || !ingredients || !steps || !author) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    try {
        const newRecipe = new Recipe({
            title,
            description,
            ingredients,
            steps,
            author
        });

        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création de la recette' });
    }
};

// Afficher toutes les recettes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors du chargement des recettes' });
    }
};

// Afficher une recette avec l'id
exports.getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recette non trouvée' });
        }
        res.json(recipe);
    } catch (error) {
        console.error('Erreur lors de la récupération de la recette par ID:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Supprimer une recette par son ID
exports.deleteRecipeById = async (req, res) => {
    try {
        const { id } = req.params;

        // Trouver et supprimer la recette
        const recipe = await Recipe.findByIdAndDelete(id);

        if (!recipe) {
            return res.status(404).json({ message: 'Recette non trouvée.' });
        }

        return res.status(200).json({ message: 'Recette supprimée avec succès.' });
    } catch (error) {
        console.error('Erreur lors de la suppression de la recette:', error);
        return res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
};

// Récupérer les recettes d'un utilisateur spécifique
exports.getRecipesByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const recipes = await Recipe.find({ author: userId });
        res.json(recipes);
    } catch (error) {
        console.error('Erreur lors de la récupération des recettes de l\'utilisateur:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des recettes de l\'utilisateur' });
    }
};
