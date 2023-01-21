import { Component, OnInit } from '@angular/core';
import { carrito } from '../interfaces/carrito';
import { ProductoService } from '../services/producto.service';
declare function magnificPrincipal(): any
declare function initMagnific(): any
declare function select2principal(): any
declare function initSelec2(): any
declare function iniciarSlick3(): any
declare function iniciarSlicksPrincipal(): any
declare function iniciarWrapProduct(): any
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public carrito: carrito[] = []
  public cantidadCarrito: number[] = []
  public total: number = 0
  constructor(public productoService: ProductoService) { }


  ngOnInit(): void {
    this.carrito = this.productoService.carrito
    this.calcularTotal();
    setTimeout(() => {
      this.iniciarScripts()
    }, 300);

  }
  ctrCantidad(valor: number, i: number) {


    let item = Object.assign({}, this.carrito[i]);
    item.cantidad += valor;
    if (item.cantidad <= 0) {
      return;
    }
    this.carrito[i] = item;
    console.log(this.carrito)
    this.calcularTotal();
  }
  calcularTotal() {
    this.total = this.carrito.reduce((acumulador, producto) => {//que hace el reduce ver
      return acumulador + (producto.precio * producto.cantidad);
    }, 0);
  }
  visualizarChange(cantidad: any) {
    console.log(cantidad)
  }
  subtotal(precio: number, cantidad: number) {
    return precio * cantidad
  }
  iniciarScripts() {
    magnificPrincipal()
    initMagnific()
    iniciarSlicksPrincipal()
    iniciarWrapProduct()
  }

}
