// pages/NotFound.jsx
import React from 'react';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Désolé, la page que vous recherchez n&apos;existe pas.</p>
            <a href="/">Retourner à l&apos;accueil</a>
        </div>
    );
};

export default NotFound;