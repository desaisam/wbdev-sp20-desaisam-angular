import { Injectable } from '@angular/core';
@Injectable()
export class QuestionServiceClient {
    findQuestionsForQuiz = (qid) =>
        fetch(`http://localhost:4000/api/quizzes/${qid}/questions`)
            .then(response => response.json())
}
