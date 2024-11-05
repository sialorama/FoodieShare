// import { render, screen, fireEvent } from '@testing-library/react';
// import SubmitRecipe from '../pages/SubmitRecipe'; // Assurez-vous que le chemin est correct
// import { BrowserRouter } from 'react-router-dom';

// describe('SubmitRecipe Component', () => {
//     test('submits a recipe and displays a success message', async () => {
//         render(
//             <BrowserRouter>
//                 <SubmitRecipe />
//             </BrowserRouter>
//         );

//         // Remplir le formulaire
//         fireEvent.change(screen.getByPlaceholderText(/Title/i), { target: { value: 'New Recipe' } });
//         fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: 'Delicious recipe' } });
//         fireEvent.change(screen.getByPlaceholderText(/Ingredients/i), { target: { value: 'Ingredient 1, Ingredient 2' } });
//         fireEvent.change(screen.getByPlaceholderText(/Steps/i), { target: { value: 'Step 1. Step 2' } });

//         // Simuler l'envoi du formulaire
//         fireEvent.click(screen.getByText(/Submit Recipe/i));

//         // Ici, vous pouvez vérifier que le formulaire a été soumis correctement,
//         // par exemple, en vérifiant qu'un message de succès est affiché.
//         const successMessage = await screen.findByText(/Recette soumise avec succès/i);
//         expect(successMessage).toBeInTheDocument();
//     });
// });
