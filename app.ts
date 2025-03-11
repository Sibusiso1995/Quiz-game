import express from 'express';
import { setQuizRoutes } from './routes/quizRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

setQuizRoutes(app);

app.get('/', (req, res) => {
    res.send('Welcome to the Quiz Game App!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});