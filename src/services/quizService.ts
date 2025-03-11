type Quiz = {
    id: number;
    title: string;
    questions: { question: string; options: string[]; answer: string }[];
};

export class QuizService {
    private quizzes: Quiz[] = [];

    constructor() {
        this.quizzes = this.initializeQuizzes();
    }

    private initializeQuizzes(): Quiz[] {
        return [
            {
                id: 1,
                title: 'Sample Quiz',
                questions: [
                    {
                        question: 'What is 2 + 2?',
                        options: ['3', '4', '5', '6'],
                        answer: '4',
                    },
                ],
            },
        ];
    }

    public getQuizzes(): Quiz[] {
        return this.quizzes;
    }

    public getQuizById(id: number): Quiz | undefined {
        return this.quizzes.find((quiz) => quiz.id === id);
    }

    public validateSubmission(quizId: number, answer: string): boolean {
        const quiz = this.getQuizById(quizId);
        return quiz ? quiz.questions.some(q => q.answer === answer) : false;
    }
}
