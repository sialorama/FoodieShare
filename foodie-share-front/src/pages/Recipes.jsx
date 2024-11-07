import { useState, useEffect } from 'react';
import './Recipes.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../imgs/cookbook.webp';

function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recipes`)
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Erreur lors du chargement des recettes:', error));
    }, []);

    return (
        <div className="recipes">
            <h1>Nos Recettes</h1>
            <div className="recipe-list">
                {recipes.map(recipe => (
                    <div className="recipe-card" key={recipe._id}>
                        <Link to={`/recipes/${recipe._id}`} className="recipe-link">
                            <img src={recipe.imageUrl || logo} alt={recipe.title} className="recipe-image" />
                            <h2 className="recipe-title">{recipe.title}</h2>
                            <p className="recipe-description">{recipe.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="logo-section">
                <img src={logo} alt="Cookbook" className="logo-img" />
            </div>
        </div>
    );
}

export default Recipes;
