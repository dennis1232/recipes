import express from 'express';
import bodyParser from 'body-parser';
import recipesRouter from './routes/recipes';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/recipes', recipesRouter);
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
