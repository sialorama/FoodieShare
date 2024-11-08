import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SubmitRecipe from '../pages/SubmitRecipe';
import { BrowserRouter } from 'react-router-dom';

describe('SubmitRecipe Component', () => {
    test('submits a recipe and displays a success message', async () => {
        // Render the SubmitRecipe component within BrowserRouter
        render(
            <BrowserRouter>
                <SubmitRecipe />
            </BrowserRouter>
        );

        // Fill in the form fields
        fireEvent.change(screen.getByPlaceholderText(/Title/i), { target: { value: 'New Recipe' } });
        fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: 'Delicious recipe' } });
        fireEvent.change(screen.getByPlaceholderText(/Ingredients/i), { target: { value: 'Ingredient 1, Ingredient 2' } });
        fireEvent.change(screen.getByPlaceholderText(/Steps/i), { target: { value: 'Step 1. Step 2' } });

        // Simulate form submission
        fireEvent.click(screen.getByText(/Submit Recipe/i));

        // Wait for the success message to appear and verify it is displayed
        await waitFor(() => {
            const successMessage = screen.getByText(/Recette soumise avec succès/i);
            expect(successMessage).toBeInTheDocument();
        });

        // Optional: Verify if fields are cleared after successful submission
        expect(screen.getByPlaceholderText(/Title/i)).toHaveValue('');
        expect(screen.getByPlaceholderText(/Description/i)).toHaveValue('');
        expect(screen.getByPlaceholderText(/Ingredients/i)).toHaveValue('');
        expect(screen.getByPlaceholderText(/Steps/i)).toHaveValue('');
    });
});
