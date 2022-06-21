import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Carla';

  userData = {
    email: 'carla@email.com',
    role: 'Admin',
  }

  title = 'moment';
}
