import { Router } from 'express';
import QuizController from '../controllers/quizController';
import { QuizService } from '../services/quizService';

const router = Router();
const quizService = new QuizService();
const quizController = new QuizController(quizService);

export function setQuizRoutes(app: any) {
    app.use('/api/quizzes', router);
    router.get('/', quizController.getQuizzes.bind(quizController));
    router.get('/:id', quizController.getQuizById.bind(quizController));
    router.post('/submit', quizController.submitQuiz.bind(quizController));
}
