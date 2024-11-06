import { useState, useContext } from 'react';
import './SubmitRecipe.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth/authContext';
import PropTypes from 'prop-types';
import logo from '../imgs/submitRecipe.png'

function SubmitRecipe() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        ingredients: '',
        steps: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { title, description, ingredients, steps } = formData;
        if (!title || !description || !ingredients || !steps) {
            return 'Tous les champs doivent être remplis.';
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!user) {
            alert('Vous devez être connecté pour soumettre une recette.');
            return;
        }

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const newRecipe = {
                ...formData,
                ingredients: formData.ingredients.split(',').map(ingredient => ingredient.trim()),
                steps: formData.steps.split('.').map(step => step.trim()).filter(step => step),
                userId: user.userId,
            };

            await axios.post(`${import.meta.env.VITE_API_URL}/recipes`, newRecipe, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            navigate('/recipes');
        } catch (error) {
            setError('Une erreur est survenue lors de la soumission de la recette. Veuillez réessayer plus tard.');
            console.error('Erreur lors de la soumission de la recette:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}  className="submit-recipe">
            <h2>Soumettre une recette</h2>
            <img className="body-img" src={logo} alt="submitRecipe" />


            {/* Affichage des erreurs */}
            {error && <ErrorMessage message={error} />}

            <InputField
                name="title"
                placeholder="Titre"
                value={formData.title}
                onChange={handleInputChange}
                required
            />
            <TextAreaField
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                required
            />
            <InputField
                name="ingredients"
                placeholder="Ingrédients (séparés par des virgules)"
                value={formData.ingredients}
                onChange={handleInputChange}
                required
            />
            <InputField
                name="steps"
                placeholder="Étapes (séparées par des points)"
                value={formData.steps}
                onChange={handleInputChange}
                required
            />

            <button type="submit" disabled={loading}>
                {loading ? 'Envoi en cours...' : 'Soumettre la recette'}
            </button>
        </form>
        
    );
}

const InputField = ({ name, value, onChange, ...props }) => (
    <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        {...props}
    />
);

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const TextAreaField = ({ name, value, onChange, ...props }) => (
    <textarea
        name={name}
        value={value}
        onChange={onChange}
        {...props}
    />
);

TextAreaField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const ErrorMessage = ({ message }) => (
    <div style={{ color: 'red', marginBottom: '10px' }}>
        {message}
    </div>
);

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};


export default SubmitRecipe;
