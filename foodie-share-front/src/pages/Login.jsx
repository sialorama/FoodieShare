import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth/authContext'; // Importer le contexte d'authentification
import './Login.css';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isAuthenticated } = useContext(AuthContext); // `isAuthenticated` détermine si l'utilisateur est connecté
    const navigate = useNavigate();
    const [error, setError] = useState('');

    // Redirection si l'utilisateur est déjà connecté
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile'); // Redirection vers la page de profil
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, { email, password });
            login(response.data); // Mettre à jour le contexte d'authentification
            navigate('/profile'); // Rediriger après une connexion réussie
        } catch (error) {
            setError('Erreur de connexion. Veuillez vérifier vos identifiants.');
            console.error('Erreur lors de la connexion:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <h2>Connexion</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Mot de passe</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Connexion</button>
            </form>
        </div>
    );
}

export default Login;
