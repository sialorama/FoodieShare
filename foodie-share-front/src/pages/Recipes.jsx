import { useState, useEffect } from 'react';
import './Recipes.css'
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
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe._id}>
                        <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
            <ul>
            <img src={logo} alt="Cookbook" />
            </ul>
        </div>
    );
}

export default Recipes;
