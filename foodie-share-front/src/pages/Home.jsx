import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recipes`)
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Erreur lors du chargement des recettes:', error));
    }, []);

    return (
        <div>
            <h1>Liste des Recettes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe._id}>
                        <Link to={`/recipe/${recipe._id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
