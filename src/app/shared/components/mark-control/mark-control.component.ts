import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-control',
  templateUrl: './mark-control.component.html',
  styleUrls: ['./mark-control.component.scss'],
})
export class MarkControlComponent implements OnInit {
  @Output('correctAnswer') correctAnswer = new EventEmitter();
  @Output('wrongAnswer') wrongAnswer = new EventEmitter();

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  myCorrectAnswer() {
    this.correctAnswer.emit('');
  }

  myWrongAnswer() {
    this.wrongAnswer.emit('');
    this._router.navigate(['/literacy/stage-completion']);
  }
}
