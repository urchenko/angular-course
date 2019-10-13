import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStart = new EventEmitter<number>();
  @Output() gameStop = new EventEmitter<string>();
  magicNumber: number = 0;
  intervalID: any = null;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    if (this.isStartDisabled()) return;
    this.intervalID = setInterval( () => {
      this.gameStart.emit(this.magicNumber);
      this.magicNumber ++;
    }, 1000);
  }

  onGameStop() {
    this.gameStop.emit('Stop!');
    clearInterval(this.intervalID);
    this.magicNumber = 0;
    this.intervalID = null;
  }

  isStartDisabled() {
    return !!this.intervalID
        && this.magicNumber > 0;
  }
}
