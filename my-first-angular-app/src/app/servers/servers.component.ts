import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Test Server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus =
      'The server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
