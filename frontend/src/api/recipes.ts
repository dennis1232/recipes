import { get, post, put, remove } from './axios';
import { Recipe } from '../components/RecipeItem'; // Adjust path if necessary

const recipesEndpoint = 'http://localhost:8080/recipes';

// Fetch all recipes
export const fetchRecipes = async () => {
    return get(recipesEndpoint);
};

// Fetch a single recipe by ID
export const fetchRecipeById = async (id: string) => {
    return get(`${recipesEndpoint}/${id}`);
};

// Create a new recipe
export const createRecipe = async (recipe: Partial<Recipe>) => {
    return post(recipesEndpoint, recipe);
};

// Update an existing recipe by ID
export const updateRecipe = async (id: string, recipe: Partial<Recipe>) => {
    return put(`${recipesEndpoint}/${id}`, recipe);
};

// Delete a recipe by ID
export const deleteRecipe = async (id: string) => {
    return remove(`${recipesEndpoint}/${id}`);
};
