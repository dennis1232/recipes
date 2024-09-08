import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { deleteRecipe } from '../api/recipes'; // Import the API function

export interface Recipe {
    id: string;
    title: string;
    ingredients: string;
    steps: string;
}

interface RecipeItemProps {
    recipe: Recipe;
    onDelete: () => void;
    onEdit?: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe, onDelete, onEdit }) => {

    const handleDelete = async () => {
        try {
            await deleteRecipe(recipe.id);
            onDelete();
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    return (
        <Card sx={{ width: '100%', maxWidth: 300, borderRadius: '12px', boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                    {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Ingredients:</strong> {recipe.ingredients}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Steps:</strong> {recipe.steps}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button size="small" color="primary" onClick={onEdit}>
                    Edit
                </Button>
                <Button size="small" color="error" onClick={handleDelete}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default RecipeItem;
