import { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Reset error message
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, { name, email, password });
            alert('Registration successful! You can now log in.');
        } catch (error) {
            console.error("Erreur lors de l'inscription:", error);
            setError('Une erreur est survenue lors de l’inscription. Veuillez réessayer.');
        }
    };

    return (
        <form onSubmit={handleSubmit}  className="auth-form">
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>
                Name:
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
