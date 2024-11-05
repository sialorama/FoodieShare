const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const userController = require('../controllers/userController');

router.get('/', recipeController.getAllRecipes); // Route pour GET /recipes
router.get('/:id', recipeController.getRecipeById); // Route pour GET /recipes/:id
router.post('/submit', recipeController.createRecipe); // Route pour POST /recipes/submit
router.delete('/:id', recipeController.deleteRecipeById); // Route pour DELETE /recipes/:id


module.exports = router;

