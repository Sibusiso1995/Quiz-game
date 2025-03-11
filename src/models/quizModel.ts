export class QuizModel {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;

    constructor(id: number, question: string, options: string[], correctAnswer: string) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
}
