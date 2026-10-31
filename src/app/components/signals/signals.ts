import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals',
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})
export class Signals {
  protected readonly precio = signal(100)
  protected readonly cantidad = signal(2)

  protected readonly total = computed(() => this.precio() * this.cantidad())


  protected precioComun = 100
  protected cantidadComun = 2
  protected totalComun = this.precioComun * this.cantidadComun

  aumentarCantidad():void {
    this.cantidad.update(valorActual => valorActual + 1)
    this.cantidadComun += 1
  }

  bajarCantidad():void {
    if(this.cantidad() >0) {
      this.cantidad.update(valorActual => valorActual -1)
    }

    if(this.cantidadComun >0) {
      this.cantidadComun = Math.max(0, this.cantidadComun -1)
    }
  }

  cambiarPrecio():void {
    this.precio.set(200)
    this.precioComun = 200
  }

  reiniciar():void {
    this.precio.set(100)
    this.cantidad.set(2)
    this.precioComun = 100
    this.cantidadComun= 2
    this.calcularTotalComun()
  }

  calcularTotalComun():void {
    this.totalComun = this.precioComun * this.cantidadComun
  }
}
