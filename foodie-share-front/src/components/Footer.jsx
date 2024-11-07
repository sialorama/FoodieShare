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
                <a href="https://www.faq.com" aria-label="Questions fréquentes">Questions fréquentes</a> 
                <a href="https://www.example.com/terms" aria-label="Conditions d&apos;utilisation">Conditions d&apos;utilisation</a> 
                <a href="https://www.example.com/privacy" aria-label="Politique de confidentialité">Politique de confidentialité</a> 
            </div>

            <div className="footer-social">
                <a href="https://www.facebook.com" aria-label="Facebook" className="social-icon facebook" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://twitter.com" aria-label="X (Twitter)" className="social-icon twitter" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://www.instagram.com" aria-label="Instagram" className="social-icon instagram" target="_blank" rel="noopener noreferrer"></a>
                <a href="mailto:contact@foodieshare.com" aria-label="Email" className="social-icon email" target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div className="footer-copyright">
                <span>Foodie Share © 2024</span>
            </div>
        </footer>
    );
};

export default Footer;
