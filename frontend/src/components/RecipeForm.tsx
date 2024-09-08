import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Recipe } from './RecipeItem'; // Ensure Recipe interface is imported
import { createRecipe, updateRecipe } from '../api/recipes';

interface RecipeFormProps {
    initialData: Recipe | null;
    onSave: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ initialData, onSave }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setIngredients(initialData.ingredients);
            setSteps(initialData.steps);
        }
    }, [initialData]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const recipeData = { title, ingredients, steps };
        if (initialData) {
            await updateRecipe(initialData.id, recipeData)
        } else {
            await createRecipe(recipeData)
        }

        onSave();
    };

    return (
        <>
            <Typography variant="h6" gutterBottom align="center">
                {initialData ? 'Edit Recipe' : 'Add New Recipe'}
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Ingredients"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Steps"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                    />
                </Box>
                <Box display="flex" justifyContent="center">
                    <Button type="submit" variant="contained" color="primary">
                        {initialData ? 'Update Recipe' : 'Add Recipe'}
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default RecipeForm;
