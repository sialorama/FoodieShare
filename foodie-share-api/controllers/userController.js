const User = require('../models/user');
const Recipe = require('../models/recipe');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Récupérer le profil de l'utilisateur
exports.getUserProfile = async (req, res) => {
    try {
        const userId = req.userId; // Utiliser l'ID de l'utilisateur depuis le token JWT

        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        const recipes = await Recipe.find({ userId });

        res.json({ user, recipes });
    } catch (error) {
        console.error('Erreur lors de la récupération du profil utilisateur:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Inscription de l'utilisateur
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email déjà utilisé' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Connexion de l'utilisateur
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Utilisateur non trouvé' });
        }

        // Log pour vérifier le mot de passe
        console.log('Mot de passe entré:', password);
        console.log('Mot de passe dans la base de données:', user.password);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // Log de la clé secrète (à retirer en production)
        console.log('Clé secrète utilisée:', process.env.JWT_SECRET);

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, userId: user._id, name: user.name });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};
