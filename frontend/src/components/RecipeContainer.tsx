import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import { fetchRecipes } from '../api/recipes';
import RecipeForm from './RecipeForm';
import { Container, Box, Typography, Button, Drawer, Paper } from '@mui/material';
import { Recipe } from './RecipeItem'; // Ensure Recipe interface is imported

const RecipeContainer: React.FC = () => {
    const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const fetchRecipesData = async () => {
        try {
            const data = await fetchRecipes();
            setRecipes(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const handleEdit = (recipe: Recipe) => {
        setEditingRecipe(recipe);
        setDrawerOpen(true);
    };

    const handleSave = () => {
        setEditingRecipe(null);
        setDrawerOpen(false);
        fetchRecipesData();
    };

    const handleOpenForm = () => {
        setEditingRecipe(null);
        setDrawerOpen(true);
    };

    const handleCloseForm = () => {
        setDrawerOpen(false);
    };

    useEffect(() => {
        fetchRecipesData();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: 3 }}>
                Recipe Management
            </Typography>

            <Button
                variant="contained"
                color="primary"
                onClick={handleOpenForm}
                sx={{ mb: 3 }}
            >
                Add Recipe
            </Button>

            <RecipeList onEdit={handleEdit} recipes={recipes} fetchRecipesData={fetchRecipesData} />

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleCloseForm}
                sx={{ width: 400 }}
            >
                <Box sx={{ width: 400, p: 2 }}>
                    <Paper sx={{ p: 2 }}>
                        <RecipeForm initialData={editingRecipe} onSave={handleSave} />
                    </Paper>
                </Box>
            </Drawer>
        </Container>
    );
};

export default RecipeContainer;
