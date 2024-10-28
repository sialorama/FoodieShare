import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recipes/${id}`)
            .then(response => setRecipe(response.data))
            .catch(error => console.error('Erreur lors du chargement de la recette:', error));
    }, [id]);

    if (!recipe) return <p>Chargement...</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <h2>Ingrédients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
            {/* Ajout de la section commentaires à l'avenir */}
        </div>
    );
}

export default RecipeDetail;
