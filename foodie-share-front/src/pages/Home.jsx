import './Home.css';
import logo from '../imgs/recettes.webp'

function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Bienvenue sur FoodieShare</h1>
            <p className="home-description">Découvre et partage de délcieuses recettes !</p>
            <img src={logo} alt="FoodieShare" />

        </div>
    );
}

export default Home;
