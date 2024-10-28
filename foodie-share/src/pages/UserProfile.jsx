import { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
    const [user, setUser] = useState(null);
    const [userRecipes, setUserRecipes] = useState([]);

    useEffect(() => {
        // Remplace `userId` par l'identifiant de l'utilisateur connecté
        const userId = 'user-id-exemple';

        axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`)
            .then(response => {
                setUser(response.data.user);
                setUserRecipes(response.data.recipes);
            })
            .catch(error => console.error('Erreur lors du chargement du profil utilisateur:', error));
    }, []);

    if (!user) return <p>Chargement du profil...</p>;

    return (
        <div>
            <h1>Profil de {user.name}</h1>
            <p>Email : {user.email}</p>
            <h2>Mes Recettes</h2>
            <ul>
                {userRecipes.map(recipe => (
                    <li key={recipe._id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserProfile;
