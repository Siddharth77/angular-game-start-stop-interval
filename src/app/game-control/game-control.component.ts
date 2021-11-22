import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() countFired = new EventEmitter<number>();
  lastCount: number = 0;
  counter;
  constructor() {}

  ngOnInit() {}

  onStart() {
    this.counter = setInterval(() => {
      this.countFired.emit(this.lastCount + 1);
      this.lastCount++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.counter);
  }
}
