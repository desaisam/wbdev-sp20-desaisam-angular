import {Injectable} from '@angular/core';
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://wbdev-sp20-desaisam-node.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://wbdev-sp20-desaisam-node.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
