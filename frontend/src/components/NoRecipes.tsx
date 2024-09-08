import React from 'react';
import { Box, Typography } from '@mui/material';

interface NoRecipesProps {
    searchTerm?: string;
}

const NoRecipes: React.FC<NoRecipesProps> = ({ searchTerm }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60vh',
                textAlign: 'center',
            }}
        >
            {searchTerm ? (
                <>
                    <Typography variant="h6" gutterBottom>
                        No recipes found
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        It looks like there are no recipes that match "{searchTerm}". Try a different search term or add a new recipe.
                    </Typography>
                </>
            ) : (
                <>
                    <Typography variant="h6" gutterBottom>
                        No recipes available
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        It looks like you haven't added any recipes yet. Start by adding a new recipe to get started.
                    </Typography>
                </>
            )}

        </Box>
    );
};

export default NoRecipes;
