import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/QuizServiceClient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private services: QuizServiceClient,
    private route: ActivatedRoute) { }
  quizzes = []
  courseId = ""
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId
      this.services.findAllQuizzes().then(quizzes => this.quizzes = quizzes)
    })
  }

}
