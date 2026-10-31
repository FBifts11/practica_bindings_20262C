import { Component, signal, computed } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {

  //  CONTADOR
  protected readonly valor_contador = signal(0)
  protected readonly esCero = computed(() => this.valor_contador() === 0)

  // INTERCAMBIO INFO ENTRE COMPONENTES
  protected readonly mensaje_desde_padre = signal('')
  protected readonly mensaje_desde_hijo = signal('')


  // CONTADOR
  incrementar_valor(): void {
    this.valor_contador.update(v => v + 1)
  }

  decrementar_valor(): void {

    if (this.valor_contador() > 0) {
      this.valor_contador.update(v => v - 1)
    }
  }

  resetear_valor(): void {
    this.valor_contador.set(0)
  }

  // INTERCAMBIO INFO ENTRE COMPONENTES
  actualizar_mensaje_desde_padre(texto: string): void {

    this.mensaje_desde_padre.set(texto)
  }

  recibir_mensaje(mensaje: string):void {
    this.mensaje_desde_hijo.set(mensaje)
  }

}
