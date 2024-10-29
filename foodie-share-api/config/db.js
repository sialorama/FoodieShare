require('dotenv').config();
const mongoose = require('mongoose');

// Construire l'URI MongoDB avec les variables d'environnement
const mongoURI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;
