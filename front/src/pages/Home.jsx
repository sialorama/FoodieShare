import './Home.css';
import logo from '../imgs/recettes.webp';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Bienvenue sur FoodieShare</h1>
            <h2 className="home-description">Découvrez et partagez de délicieuses recettes !</h2>
            <Link to="/recipes">
            <div className="home-logo-container">
                <img src={logo} alt="FoodieShare" className="home-logo" />
            </div>
            </Link>
        </div>
    );
}

export default Home;
