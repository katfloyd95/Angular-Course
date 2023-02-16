import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [
    `
      .fifth {
        color: white;
      }
    `,
  ],
})
export class ServersComponent {
  hiddenMessage = false;
  clickCounter = 0;
  counterArray: number[] = [];

  toggleMessage() {
    this.hiddenMessage = this.hiddenMessage ? false : true;
    this.clickCounter++;
    this.counterArray.push(this.clickCounter);
  }

  getColor() {
    return this.clickCounter >= 5 ? 'skyblue' : 'none';
  }
}
