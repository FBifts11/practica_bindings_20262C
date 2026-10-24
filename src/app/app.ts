import { Component, signal } from '@angular/core';
import { Signals } from './components/signals/signals';

@Component({
  selector: 'app-root',
  imports: [Signals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Practica Bindings con Signals()');
  
  mensaje  = 'En esta practica vamos a ver como se trabaja con signals en Angular'
}
