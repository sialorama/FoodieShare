const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Route pour l'inscription d'un utilisateur
router.post('/register', userController.registerUser);

// Route pour la connexion d'un utilisateur
router.post('/login', userController.loginUser);

// Route pour récupérer le profile de l'utilisateur avec l'id
router.get('/:id', userController.getUserProfile);

module.exports = router;
