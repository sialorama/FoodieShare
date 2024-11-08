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
            <div className="navbar-links">
                <NavLink 
                    exact 
                    to="/" 
                    className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/recipes" 
                    className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                >
                    Recettes
                </NavLink>
                {user ? (
                    <>
                        <NavLink 
                            to="/submit-recipe" 
                            className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                        >
                            Ajouter une recette
                        </NavLink>
                        <NavLink 
                            to="/profile" 
                            className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                        >
                            Mes recettes
                        </NavLink>
                        <NavLink 
                            to="#" 
                            onClick={handleLogout} 
                            className="navbar-link"
                        >
                            Déconnexion
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink 
                            to="/login" 
                            className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                        >
                            Connexion
                        </NavLink>
                        <NavLink 
                            to="/register" 
                            className={({ isActive }) => isActive ? "navbar-link active-link" : "navbar-link"}
                        >
                            S&apos;enregistrer
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
