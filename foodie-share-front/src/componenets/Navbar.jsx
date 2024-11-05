import { useContext } from 'react';
import AuthContext from '../auth/authContext';
import { Link } from 'react-router-dom';

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">Accueil</Link>
            {user ? (
                <>
                    <Link to="/profile">Mon Profil</Link>
                    <button onClick={logout}>Se Déconnecter</button>
                </>
            ) : (
                <>
                    <Link to="/login">Connexion</Link>
                    <Link to="/register">Inscription</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
