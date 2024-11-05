const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route pour l'inscription d'un utilisateur
router.post('/register', userController.registerUser);

// Route pour la connexion d'un utilisateur
router.post('/login', userController.loginUser);

// Route pour récupérer le profil de l'utilisateur (nécessite l'authentification)
router.get('/profile', authMiddleware, userController.getUserProfile);

module.exports = router;
