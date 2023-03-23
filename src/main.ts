import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CintiaTimerComponent } from './cintia-timer/cintia-timer.component';
import { CintiajurossimplesComponent } from './cintia-juros-simples/cintia-juros-simples.component';
import { CintiaJurosCompostosComponent } from './cintia-juros-compostos/cintia-juros-compostos.component';
import { CintiaRandomComponent } from './cintia-random/cintia-random.component';
import { CintiaHeaderComponent } from './cintia-header/cintia-header.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    CintiaTimerComponent,
    CintiajurossimplesComponent,
    CintiaJurosCompostosComponent,
    CintiaRandomComponent,
    CintiaHeaderComponent,
  ],
  template: `

    <app-cintia-header> </app-cintia-header>
    <app-cintia-timer> </app-cintia-timer>
    <app-cintiajurossimples> </app-cintiajurossimples>
    <app-cintia-juros-compostos> </app-cintia-juros-compostos>
    <app-cintia-random> </app-cintia-random>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
