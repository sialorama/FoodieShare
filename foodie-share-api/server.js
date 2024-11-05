const express = require('express');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users.js')
const cors = require('cors');

const app = express();

// Connecter à la base de données MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);

// Lancer le serveur
const PORT = process.env.NODE_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
