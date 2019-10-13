import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd: number[] = [];
  even: number[] = [];


  onGameStart(value: number) {
    value % 2 === 0
      ? this.odd.push(value)
      : this.even.push(value);
  }

  onGameEnd() {
    this.odd = [];
    this.even = [];
  }
}
