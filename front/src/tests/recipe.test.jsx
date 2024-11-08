import { render, screen, waitFor, cleanup } from '@testing-library/react';
import axios from 'axios';
import Recipes from '../pages/Recipes';

jest.mock('axios');

describe('Recipes Component', () => {
    // Sample data for successful response
    const recipesData = [
        {
            _id: '1',
            title: 'Recipe One',
            description: 'Description for Recipe One',
            ingredients: ['Ingredient 1', 'Ingredient 2'],
            steps: ['Step 1', 'Step 2'],
        },
        {
            _id: '2',
            title: 'Recipe Two',
            description: 'Description for Recipe Two',
            ingredients: ['Ingredient A', 'Ingredient B'],
            steps: ['Step A', 'Step B'],
        },
    ];

    // Clean up after each test to avoid test interference
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('should render the recipes when API call is successful', async () => {
        // Mock successful response from axios
        axios.get.mockResolvedValue({ data: recipesData });

        // Render the Recipes component
        render(<Recipes />);

        // Check if recipe titles are displayed
        await waitFor(() => {
            expect(screen.getByText('Recipe One')).toBeInTheDocument();
            expect(screen.getByText('Recipe Two')).toBeInTheDocument();
        });

        // Check if recipe descriptions are displayed
        expect(screen.getByText('Description for Recipe One')).toBeInTheDocument();
        expect(screen.getByText('Description for Recipe Two')).toBeInTheDocument();
    });

    it('should display an error message when API call fails', async () => {
        // Mock failed response from axios
        axios.get.mockRejectedValue(new Error('Error fetching recipes'));

        // Render the Recipes component
        render(<Recipes />);

        // Check if error message is displayed
        await waitFor(() => {
            expect(screen.getByText('Erreur lors du chargement des recettes')).toBeInTheDocument();
        });
    });
});
