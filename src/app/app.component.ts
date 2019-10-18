import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = this.userService.activeUsers;
  inactiveUsers = this.userService.inactiveUsers;

  constructor(private userService: UserService) {}
}
