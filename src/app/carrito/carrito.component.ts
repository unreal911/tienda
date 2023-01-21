import { Component, OnInit, ViewChild } from '@angular/core';
import { carrito } from '../interfaces/carrito';
import { ProductoService } from '../services/producto.service';
import * as QRCode from 'qrcode';
import { FormBuilder, FormGroup } from '@angular/forms';
declare function magnificPrincipal(): any
declare function initMagnific(): any
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
  public formularioPedido:any
  @ViewChild('qrcode', { static: true }) qrcode: any;
  phoneNumber = '980904787';
  amount = '10';

  constructor(
    public productoService: ProductoService,
  ) { }




  generateQRCode() {
    //aun falta pullir
    console.log('Hola')
    const canvas = document.createElement('canvas');
    QRCode.toCanvas(canvas, '0002010102113944RtukSqn/TbaeE57pkKi1bt7p/6BWUxxIVo8bp2XIZxI=5204561153036045802PE5906YAPERO6004Lima6304F9A2', { errorCorrectionLevel: 'H' },
      (error: any) => {
        console.log(error)
        if (error) console.error(error);
        console.log('success!');
      });
    this.qrcode.nativeElement.appendChild(canvas);
  }
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
