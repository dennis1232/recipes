import { promises as fs } from 'fs';
import path from 'path';

const dbFilePath = path.resolve('./src/database/db.json');

interface Recipe {
    id: string;
    title: string;
    ingredients: string;
    steps: string;
}

interface DatabaseSchema {
    recipes: Recipe[];
}

async function readDatabase(): Promise<DatabaseSchema> {
    const data = await fs.readFile(dbFilePath, 'utf-8');
    return JSON.parse(data);
}

async function writeDatabase(data: DatabaseSchema): Promise<void> {
    await fs.writeFile(dbFilePath, JSON.stringify(data, null, 2));
}
export { readDatabase, writeDatabase, Recipe }