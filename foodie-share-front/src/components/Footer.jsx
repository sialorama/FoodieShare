// components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <span>Nous contacter</span>
            </div>
            <div className="footer-links">
                <a href="#">Questions fréquentes</a>
                <a href="#">Conditions d&apos;utilisation</a>
                <a href="#">Politique de confidentialité</a>
            </div>
            <div className="footer-social">
                <a href="#" aria-label="Facebook" className="social-icon facebook"></a>
                <a href="#" aria-label="X (Twitter)" className="social-icon twitter"></a>
                <a href="#" aria-label="Instagram" className="social-icon instagram"></a>
                <a href="#" aria-label="Email" className="social-icon email"></a>
            </div>
            <div className="footer-copyright">
                <span>Foodie Share © 2024</span>
            </div>
        </footer>
    );
};

export default Footer;
