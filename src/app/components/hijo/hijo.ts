import { Component, input, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo {

  readonly hijo_recibe_mensaje = input('')
  readonly mensaje = output<string>()
  readonly incrementar_desde_hijo = output<void>()
  readonly decrementar_desde_hijo = output<void>()

  protected readonly mensaje_desde_hijo = signal('')

  actualizar_mensaje_desde_hijo(texto: string): void {
    this.mensaje_desde_hijo.set(texto)
    this.enviar_mensaje_al_padre()
  }


  enviar_mensaje_al_padre(): void {
    this.mensaje.emit(this.mensaje_desde_hijo())
  }

  incrementar_contador_desde_hijo():void {
    this.incrementar_desde_hijo.emit()
  }

  decrementar_contador_desde_hijo():void {
    this.decrementar_desde_hijo.emit()
  }

  readonly esCero = input(false)
}
