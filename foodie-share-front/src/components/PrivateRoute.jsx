import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import AuthContext from '../auth/authContext';

/* La fonction PrivateRoute est un composant React personnalisé qui protège l'accès à certaines routes de votre application. 
L'objectif principal de ce composant est de s'assurer qu'une route spécifique n'est accessible qu'aux utilisateurs authentifiés.
Si l'utilisateur n'est pas authentifié, il est généralement redirigé vers une page de connexion ou une autre page publique.*/

function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext);
    return user ? children : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
