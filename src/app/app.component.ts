import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  TitleCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuyLargoPipe } from './pipes/muy-largo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { FechaPipe } from './pipes/fecha.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleCasePipe,
    CurrencyPipe,
    JsonPipe,
    DatePipe,
    MuyLargoPipe,
    HighlightDirective,
    FechaPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipes-directivas-2024';
  precio = 10000;
  fecha = new Date();
  texto = 'Hola mundo';
  datos = {
    title: this.title,
    precio: this.precio,
    fecha: this.fecha,
  };
}
