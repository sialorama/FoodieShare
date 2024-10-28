import { useState } from 'react';
import axios from 'axios';

function SubmitRecipe() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            title,
            description,
            ingredients: ingredients.split('\n'),
            instructions: instructions.split('\n')
        };

        axios.post(`${import.meta.env.VITE_API_URL}/recipes`, newRecipe)
            .then(response => {
                console.log('Recette ajoutée:', response.data);
                // Réinitialiser le formulaire
                setTitle('');
                setDescription('');
                setIngredients('');
                setInstructions('');
            })
            .catch(error => console.error('Erreur lors de l\'ajout de la recette:', error));
    };

    return (
        <div>
            <h1>Soumettre une Nouvelle Recette</h1>
            <form onSubmit={handleSubmit}>
                <label>Titre:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

                <label>Ingrédients (un par ligne):</label>
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />

                <label>Instructions (une par ligne):</label>
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />

                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default SubmitRecipe;
