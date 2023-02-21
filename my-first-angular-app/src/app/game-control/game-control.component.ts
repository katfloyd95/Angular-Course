import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  intervalFired = new EventEmitter<number>();
  lastNumber: number = 0;
  interval: number;

  onStartGame() {
    this.interval = setInterval(() => {
      this.lastNumber++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
