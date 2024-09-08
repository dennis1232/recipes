import express, { Request, Response, Router } from 'express';
import { readDatabase, writeDatabase, Recipe } from '../database/dbService';

const router: Router = express.Router();
router.get('/', async (req: Request, res: Response) => {
    const db = await readDatabase();
    res.json(db.recipes);
});

router.post('/', async (req: Request, res: Response) => {
    const { title, ingredients, steps } = req.body;
    const newRecipe: Recipe = { id: Date.now().toString(), title, ingredients, steps };

    const db = await readDatabase();
    db.recipes.push(newRecipe);
    await writeDatabase(db);
    res.status(201).json(newRecipe);
});

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, ingredients, steps } = req.body;

    const db = await readDatabase();
    const recipeIndex = db.recipes.findIndex(recipe => recipe.id === id);
    if (recipeIndex === -1) return res.status(404).json({ error: 'Recipe not found' });

    db.recipes[recipeIndex] = { id, title, ingredients, steps };
    await writeDatabase(db);
    res.json(db.recipes[recipeIndex]);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    const db = await readDatabase();
    db.recipes = db.recipes.filter(recipe => recipe.id !== id);
    await writeDatabase(db);
    res.status(204).end();
});

export default router;
