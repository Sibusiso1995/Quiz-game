export class QuizController {
    constructor(private quizService: any) {}

    public async getQuizzes(req: any, res: any) {
        try {
            const quizzes = await this.quizService.getQuizzes();
            res.status(200).json(quizzes);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching quizzes' });
        }
    }

    public async getQuizById(req: any, res: any) {
        const quizId = req.params.id;
        try {
            const quiz = await this.quizService.getQuizById(quizId);
            if (quiz) {
                res.status(200).json(quiz);
            } else {
                res.status(404).json({ message: 'Quiz not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching quiz' });
        }
    }

    public async submitQuiz(req: any, res: any) {
        const { quizId, answer } = req.body;
        try {
            const result = await this.quizService.validateSubmission(quizId, answer);
            res.status(200).json({ correct: result });
        } catch (error) {
            res.status(500).json({ message: 'Error submitting quiz' });
        }
    }
}

export default QuizController;
