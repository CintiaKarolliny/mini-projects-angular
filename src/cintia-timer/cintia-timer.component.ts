import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cintia-timer',
  standalone: true,
  templateUrl: './cintia-timer.component.html',
  styleUrls: ['./cintia-timer.component.css'],
})
export class CintiaTimerComponent implements OnInit {
  //timer
  segundo = 0;
  counter;

  constructor() {}

  start() {
    this.counter = setInterval(() => {
      this.segundo++;
    }, 1000);
  }

  pause() {
    clearInterval(this.counter);
  }

  stop() {
    clearInterval(this.counter);
    this.segundo = 0;
  }

  ngOnInit() {}
}
