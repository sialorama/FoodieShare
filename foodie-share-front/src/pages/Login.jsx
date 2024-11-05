import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../auth/authContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, { email, password });
            login(response.data);
            navigate('/profile');
        } catch (error) {
            setError('Erreur de connexion. Veuillez vérifier vos identifiants.');
            console.error('Erreur lors de la connexion:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
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
