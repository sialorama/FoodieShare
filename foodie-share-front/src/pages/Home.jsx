import './Home.css';
import logo from '../imgs/recettes.webp';

function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Bienvenue sur FoodieShare</h1>
            <p className="home-description">Découvre et partage de délicieuses recettes !</p>
            <div className="home-logo-container">
                <img src={logo} alt="FoodieShare" className="home-logo" />
            </div>
        </div>
    );
}

export default Home;
