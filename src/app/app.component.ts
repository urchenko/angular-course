import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    li {
      list-style: none;
    }
    .color-white {
      color: white;
    }`
  ]
})
export class AppComponent {
  isContentShown = false;
  content = 'Secret Password = Tuna';
  clickItems = [];

  displayDetails() {
    this.isContentShown = !this.isContentShown;
    this.clickItems.push(new Date().toISOString());
  }

  getBackgroundColor(elem) {
    const index = this.clickItems.findIndex(x => x.valueOf() === elem.valueOf());
    return index > 4 ? 'blue' : 'none';
  }

  isColorWhite(elem) {
    return this.clickItems.findIndex(x => x.valueOf() === elem.valueOf()) > 4;
  }
}
