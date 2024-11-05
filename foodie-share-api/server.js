const express = require('express');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipes');
const cors = require('cors');

const app = express();

// Connecter à la base de données MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/recipes', recipeRoutes);

// Lancer le serveur
const PORT = process.env.NODE_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
