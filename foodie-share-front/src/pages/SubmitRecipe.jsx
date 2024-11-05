import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../auth/authContext';

function SubmitRecipe() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert('Vous devez être connecté pour soumettre une recette.');
            return;
        }
        try {
            const newRecipe = {
                title,
                description,
                ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
                steps: steps.split('.').map(step => step.trim()).filter(step => step),
                userId: user.userId, // Assurez-vous d'ajouter l'ID de l'utilisateur
            };
            await axios.post(`${import.meta.env.VITE_API_URL}/recipes`, newRecipe, {
                headers: {
                    Authorization: `Bearer ${user.token}` // Inclure le token JWT dans l'en-tête
                }
            });
            navigate('/recipes');
        } catch (error) {
            console.error('Erreur lors de la soumission de la recette:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit a Recipe</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="text" placeholder="Ingredients (separated by commas)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            <input type="text" placeholder="Steps (separated by periods)" value={steps} onChange={(e) => setSteps(e.target.value)} required />
            <button type="submit">Submit Recipe</button>
        </form>
    );
}

export default SubmitRecipe;
