import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-true-fale-question',
  templateUrl: './true-fale-question.component.html',
  styleUrls: ['./true-fale-question.component.css']
})
export class TrueFaleQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = { _id: '', title: '', type: '', choices: [], correct: '', question: '' }
  @Input()
  answer = ''
  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () => {
    this.answerChange.emit(this.answer)


  }
  grading = false
  grade = () => { this.grading = true }
  ngOnInit(): void {
  }



}

