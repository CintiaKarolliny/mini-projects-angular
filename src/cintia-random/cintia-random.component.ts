import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cintia-random',
  standalone: true,
  templateUrl: './cintia-random.component.html',
  styleUrls: ['./cintia-random.component.css'],
  imports: [FormsModule, CommonModule],
})
export class CintiaRandomComponent implements OnInit {
  num = 1;
  arr: number[];

  criar() {
    this.arr = [];
    for (let i = 1; i <= this.num; i++) {
      this.arr.push(Math.trunc(100 * Math.random()));
    }
  }

  retornar() {
    return this.arr;
  }

  constructor() {}

  ngOnInit() {}
}
