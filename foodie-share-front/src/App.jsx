import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SubmitRecipe from './pages/SubmitRecipe';
import RecipeDetail from './pages/RecipeDetail';
import UserProfile from './pages/UserProfile';
import './App.css'

function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<SubmitRecipe />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
}

export default App
