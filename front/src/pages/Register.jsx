import { useState } from 'react';
import './Register.css'; // Remplacez par 'Login.css' si nécessaire
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Réinitialiser le message d'erreur
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, { name, email, password });
            alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error);
            setError('Une erreur est survenue lors de l’inscription. Veuillez réessayer.');
        }
    };

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <h2>Inscription</h2>
                {error && <div className="error-message">{error}</div>}
                
                <label htmlFor="name" className="auth-label">Nom :</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="auth-input"
                    required
                />
                
                <label htmlFor="email" className="auth-label">Email :</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                    required
                />
                
                <label htmlFor="password" className="auth-label">Mot de passe :</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                    required
                />
                
                <button type="submit" className="auth-button">S&apos;inscrire</button>
            </form>
        </div>
    );
}

export default Register;
