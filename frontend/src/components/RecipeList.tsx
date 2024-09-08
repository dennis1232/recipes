import React, { useState } from 'react';
import RecipeItem from './RecipeItem';
import NoRecipes from './NoRecipes';
import { Box, TextField, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Recipe } from './RecipeItem';

interface RecipeListProps {
    onEdit: (recipe: Recipe) => void;
    recipes: Recipe[] | null;
    fetchRecipesData: () => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ onEdit, recipes, fetchRecipesData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    if (!recipes) return <NoRecipes searchTerm={searchTerm} />

    // Filter and sort recipes
    const filteredRecipes = recipes
        .filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (a.title < b.title) return sortOrder === 'asc' ? -1 : 1;
            if (a.title > b.title) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

    return (
        <Box>
            <Stack spacing={2} mb={2} direction='row'>
                <TextField
                    label="Search Recipes"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FormControl >
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                        label="Sort By"
                    >
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            {filteredRecipes.length === 0 ? (
                <NoRecipes searchTerm={searchTerm} />
            ) : (
                <Stack direction="row" flexWrap="wrap" justifyContent="center">
                    {filteredRecipes.map(recipe => (
                        <Box key={recipe.id} sx={{ p: 1, width: { xs: '100%', sm: '48%', md: '30%' } }}>
                            <RecipeItem
                                recipe={recipe}
                                onDelete={fetchRecipesData}
                                onEdit={() => onEdit(recipe)}
                            />
                        </Box>
                    ))}
                </Stack>
            )}
        </Box>
    );
};

export default RecipeList;
