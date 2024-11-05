// pages/Recipes.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                // Remplacez l'URL par celle de votre API
                const response = await axios.get('http://localhost:3000/recipes'); // Modifiez ce chemin si nécessaire
                setRecipes(response.data);
            } catch (error) {
                setError(error, 'Erreur lors de la récupération des recettes.');
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) return <p>Chargement des recettes...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Liste des Recettes</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <Link to={`/recipes/${recipe._id}`}>
                            <h2>{recipe.title}</h2>
                        </Link>
                        <p>{recipe.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipesList;
