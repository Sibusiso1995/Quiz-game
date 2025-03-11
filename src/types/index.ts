export interface Quiz {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface QuizSubmission {
    quizId: string;
    selectedOptions: string[];
}
