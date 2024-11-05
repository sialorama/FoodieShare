import { useContext, useEffect, useState } from 'react';
import AuthContext from '../auth/authContext';
import axios from 'axios';

function UserProfile() {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchUserRecipes = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/recipes/user/${user.userId}`, {
                    headers: {
                        Authorization: `Bearer ${user.token}` // Inclure le token JWT dans l'en-tête
                    }
                });
                setRecipes(response.data);
            } catch (error) {
                console.error('Erreur lors du chargement des recettes de l\'utilisateur:', error);
            }
        };

        if (user) {
            fetchUserRecipes();
        }
    }, [user]);

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <h2>Your Recipes</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe._id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserProfile;
