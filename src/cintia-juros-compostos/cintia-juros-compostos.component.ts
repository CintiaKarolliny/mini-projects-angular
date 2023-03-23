import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cintia-juros-compostos',
  standalone: true,
  templateUrl: './cintia-juros-compostos.component.html',
  styleUrls: ['./cintia-juros-compostos.component.css'],
  imports: [FormsModule],
})
export class CintiaJurosCompostosComponent implements OnInit {
  qtMes: number;
  indice: number;
  capital: number;
  calculo: number;

  calcular() {
    this.calculo = Math.pow(1 + this.indice / 100, this.qtMes) * this.capital;

    return this.calculo;
  }

  constructor() {}

  ngOnInit() {}
}
