import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RecipeDetail from './pages/RecipeDetail';
import Recipes from './pages/Recipes';
import SubmitRecipe from './pages/SubmitRecipe';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './auth/authProvider';

function App() {
    return (
        <AuthProvider>

                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/recipes/:id" element={<RecipeDetail />} />
                    <Route path="/submit-recipe" element={
                        <PrivateRoute>
                            <SubmitRecipe />
                        </PrivateRoute>
                    } />
                    <Route path="/profile" element={
                        <PrivateRoute>
                            <UserProfile />
                        </PrivateRoute>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>

        </AuthProvider>
    );
}

export default App;
