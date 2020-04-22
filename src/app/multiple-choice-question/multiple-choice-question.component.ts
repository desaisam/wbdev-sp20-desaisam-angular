import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = { _id: '', title: '', type: '', choices: [], correct: '', question: '' }
  @Input()
  answer = ''
  @Output()
  answerChange =new EventEmitter<string>()
  submitAnswer = () =>
    this.answerChange.emit(this.answer)
  grading = false
  grade = () => { this.grading = true }


  ngOnInit(): void {
  }

}
