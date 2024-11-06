import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../auth/authContext';
import './Navbar.css';

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            {user ? (
                <>
                    <Link to="/submit-recipe">Submit Recipe</Link>
                    <Link to="/profile">Profile</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
