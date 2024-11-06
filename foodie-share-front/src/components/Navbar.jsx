import { Link, NavLink } from 'react-router-dom';
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
            </div>
            <div className="navbar-links">
                <NavLink exact to="/" className="navbar-link" activeClassName="active-link">
                    Home
                </NavLink>
                <NavLink to="/recipes" className="navbar-link" activeClassName="active-link">
                    Recipes
                </NavLink>
                {user ? (
                    <>
                        <NavLink to="/submit-recipe" className="navbar-link" activeClassName="active-link">
                            Submit Recipe
                        </NavLink>
                        <NavLink to="/profile" className="navbar-link" activeClassName="active-link">
                            Profile
                        </NavLink>
                        <button className="navbar-logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className="navbar-link" activeClassName="active-link">
                            Login
                        </NavLink>
                        <NavLink to="/register" className="navbar-link" activeClassName="active-link">
                            Register
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
