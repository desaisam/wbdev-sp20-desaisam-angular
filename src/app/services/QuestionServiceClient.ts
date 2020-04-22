import { Injectable } from '@angular/core';
@Injectable()
export class QuestionServiceClient {
    findQuestionsForQuiz = (qid) =>
        fetch(`https://https://wbdev-sp20-desaisam-node.herokuapp.com/api/quizzes/${qid}/questions`)
            .then(response => response.json())
}
