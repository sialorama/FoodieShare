import './Home.css';
import logo from '../imgs/recettes.webp';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Bienvenue sur FoodieShare</h1>
            <p className="home-description">Découvre et partage de délicieuses recettes !</p>
            <Link to="/recipes">
            <div className="home-logo-container">
                <img src={logo} alt="FoodieShare" className="home-logo" />
            </div>
            </Link>
        </div>
    );
}

export default Home;
