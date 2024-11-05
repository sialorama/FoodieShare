import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx'; // Page d'accueil
import RecipeList from './pages/RecipeList.jsx'; // Liste des recettes
import RecipeDetail from './pages/RecipeDetail.jsx'; // Détails d'une recette
import UserProfile from './pages/UserProfile.jsx'; // Profil utilisateur
import NotFound from './pages/NotFound.jsx'; // Page NotFound

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/recipes" element={<RecipeList />} /> {/* Liste des recettes */}
        <Route path="/recipes/:id" element={<RecipeDetail />} /> {/* Détails d'une recette */}
        <Route path="/profile" element={<UserProfile />} /> {/* Profil utilisateur */}
        <Route path="*" element={<NotFound />} /> {/* Page 404 (non trouvée) */}
      </Routes>
    </Router>
  </React.StrictMode>
);
