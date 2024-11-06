import { useContext, useEffect, useState } from 'react';
import './UserProfile.css';
import AuthContext from '../auth/authContext';
import axios from 'axios';

function UserProfile() {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <div className="user-profile">
            <div className="profile-info">
                <h1>Hello {user.name}</h1>
            </div>

            <div className="user-recipes">
                <h2>Vos Recettes</h2>
                {loading ? (
                    <p>Chargement des recettes...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : recipes.length === 0 ? (
                    <p>Aucune recette trouvée.</p>
                ) : (
                    <ul className="recipes-list">
                        {recipes.map(recipe => (
                            <li key={recipe._id} className="recipe-item">
                                <h3>{recipe.title}</h3>
                                <p><strong>Description :</strong> {recipe.description}</p>
                                <p><strong>Ingrédients :</strong> {recipe.ingredients.join(', ')}</p>
                                <p><strong>Étapes :</strong> {recipe.steps.join('. ')}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
