import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../auth/authContext';
import './Navbar.css';

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        if (window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
            logout();
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo-section">
                {/* Ajoutez votre logo ici */}
            </div>
            <div className="navbar-links">
                <NavLink 
                    exact 
                    to="/" 
                    className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/recipes" 
                    className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                >
                    Recipes
                </NavLink>
                {user ? (
                    <>
                        <NavLink 
                            to="/submit-recipe" 
                            className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                        >
                            Submit Recipe
                        </NavLink>
                        <NavLink 
                            to="/profile" 
                            className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                        >
                            Profile
                        </NavLink>
                        <button className="navbar-logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink 
                            to="/login" 
                            className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                        >
                            Login
                        </NavLink>
                        <NavLink 
                            to="/register" 
                            className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                        >
                            Register
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
