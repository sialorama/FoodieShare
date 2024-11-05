// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import axios from 'axios';
// import Recipes from '../pages/Recipes';

// jest.mock('axios');

// describe('Recipes Component', () => {
//     const recipesData = [
//         {
//             _id: '1',
//             title: 'Recipe One',
//             description: 'Description for Recipe One',
//             ingredients: ['Ingredient 1', 'Ingredient 2'],
//             steps: ['Step 1', 'Step 2'],
//         },
//         {
//             _id: '2',
//             title: 'Recipe Two',
//             description: 'Description for Recipe Two',
//             ingredients: ['Ingredient A', 'Ingredient B'],
//             steps: ['Step A', 'Step B'],
//         },
//     ];

//     it('should render the recipes', async () => {
//         axios.get.mockResolvedValue({ data: recipesData });

//         render(<Recipes />);

//         await waitFor(() => expect(screen.getByText('Recipe One')).toBeInTheDocument());
//         await waitFor(() => expect(screen.getByText('Recipe Two')).toBeInTheDocument());

//         expect(screen.getByText('Description for Recipe One')).toBeInTheDocument();
//         expect(screen.getByText('Description for Recipe Two')).toBeInTheDocument();
//     });

//     it('should handle error when fetching recipes', async () => {
//         axios.get.mockRejectedValue(new Error('Error fetching recipes'));

//         render(<Recipes />);

//         await waitFor(() => expect(screen.getByText('Erreur lors du chargement des recettes')).toBeInTheDocument());
//     });
// });
