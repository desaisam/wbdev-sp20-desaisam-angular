import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceClient } from '../services/QuestionServiceClient';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(
    private services: QuestionServiceClient,
    private route: ActivatedRoute) { }

  questions = []
  quizId = ""
  submitQuiz = () => {
    fetch(`https://wbdev-sp20-desaisam-node.herokuapp.com/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => console.log(result))
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId
      this.services.findQuestionsForQuiz(this.quizId).then(questions => this.questions = questions)
    }
    )

  }

}
