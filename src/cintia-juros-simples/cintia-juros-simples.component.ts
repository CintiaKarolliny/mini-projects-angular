import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cintiajurossimples',
  standalone: true,
  templateUrl: './cintia-juros-simples.component.html',
  styleUrls: ['./cintia-juros-simples.component.css'],
  imports: [FormsModule],
})
export class CintiajurossimplesComponent implements OnInit {
  indice: number;
  capital: number;
  qtMes: number;
  calculo: number

  calcular() {
    this.calculo = this.capital * (this.indice / 100) * this.qtMes;

    return this.calculo;
  }

  constructor() {}

  ngOnInit() {}
}
