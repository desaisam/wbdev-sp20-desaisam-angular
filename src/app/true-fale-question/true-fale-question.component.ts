import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-true-fale-question',
  templateUrl: './true-fale-question.component.html',
  styleUrls: ['./true-fale-question.component.css']
})
export class TrueFaleQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = { _id: '', title: '', question: '', answer: '', correct: '' }
  grading = false
  grade = () => { this.grading = true }
  answer = ''
  ngOnInit(): void {
  }



}

