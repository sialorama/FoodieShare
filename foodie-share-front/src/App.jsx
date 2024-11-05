import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SubmitRecipe from './pages/SubmitRecipe';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<SubmitRecipe />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
