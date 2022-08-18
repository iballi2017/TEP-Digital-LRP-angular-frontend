import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mark-control',
  templateUrl: './mark-control.component.html',
  styleUrls: ['./mark-control.component.scss'],
})
export class MarkControlComponent implements OnInit {
  @Output('correctAnswer') correctAnswer = new EventEmitter();
  @Output('wrongAnswer') wrongAnswer = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  myCorrectAnswer() {
    this.correctAnswer.emit('');
  }

  myWrongAnswer() {
    this.wrongAnswer.emit('');
  }
}
