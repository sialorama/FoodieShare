const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Routes pour gérer les recettes
router.get('/', recipeController.getAllRecipes); // Route pour GET /recipes
router.get('/:id', recipeController.getRecipeById); // Route pour GET /recipes/:id
router.post('/', recipeController.createRecipe); // Route pour POST /recipes
router.get('/user/:userId', recipeController.getRecipesByUser); // Route pour GET /recipes/user/:userId
router.delete('/:id', recipeController.deleteRecipeById); // Route pour DELETE /recipes/:id

module.exports = router;
