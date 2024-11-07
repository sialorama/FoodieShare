import { useContext, useEffect, useState } from 'react';
import './UserProfile.css';
import AuthContext from '../auth/authContext';
import axios from 'axios';
import logo from '../assets/mesrecettes.jpg'
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserRecipes = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/recipes/user/${user.userId}`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
                setRecipes(response.data);
            } catch (error) {
                setError('Erreur lors du chargement des recettes.');
                console.error('Erreur lors du chargement des recettes de l\'utilisateur:', error);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchUserRecipes();
        }
    }, [user]);

    const handleDelete = async (recipeId) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/recipes/${recipeId}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
    
            setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
            navigate('/recipes');
        } catch (error) {
            console.error('Erreur lors de la suppression de la recette:', error);
        }
    };

    return (
        <div className="user-profile">
            <div className="profile-info">
                <h1>Bonjour, {user.name} !</h1>
            </div>
            <div className="submit-recipe-logo">
                <img src={logo} alt="Logo" className="recipe-logo" />
            </div>
            <div className="user-recipes">
                {loading ? (
                    <p>Chargement des recettes...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : recipes.length === 0 ? (
                    <p>Vous n&apos;avez pas encore de recette.</p>
                ) : (
                    <ul className="recipes-list">
                        {recipes.map(recipe => (
                            <li key={recipe._id} className="recipe-item">
                                <h3>{recipe.title}</h3>
                                <p><strong>Description :</strong> {recipe.description}</p>
                                <p><strong>Ingrédients :</strong> {recipe.ingredients.join(', ')}</p>
                                <p><strong>Étapes :</strong> {recipe.steps.join('. ')}</p>
                                <p><strong>Commentaires :</strong></p>
                                <ul>
                                    {recipe.comments.map((comment, index) => (
                                        <li key={index}>{comment.message}</li>
                                    ))}
                                </ul>
                                
                                {/* Bouton de suppression */}
                                <button className="delete-btn" onClick={() => handleDelete(recipe._id)}>
                                    Supprimer
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
