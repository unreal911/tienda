import { Component, OnInit, ViewChild } from '@angular/core';
import { carrito } from '../interfaces/carrito';
import { ProductoService } from '../services/producto.service';
import * as QRCode from 'qrcode';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PedidosService } from '../services/pedidos.service';
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
  public formularioPedido: any
  @ViewChild('qrcode', { static: true }) qrcode: any;
  phoneNumber = '980904787';
  amount = '10';

  constructor(
    public productoService: ProductoService,
    public pedidoService: PedidosService,
    public fb: FormBuilder
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
  validarCampo(nombre: string) {
    console.log()
    if (this.formularioPedido.get(nombre)?.pristine == false && this.formularioPedido.get(nombre).value == '') {
      return true
    } else {
      return false
    }
  }
  agregarPedido() {
    if (!this.formularioPedido.valid) {
      Swal.fire('Formulario invalido', 'Porfavir llene el formulario correctamente', 'info')
      return;
    }
    if (this.carrito.length == 0) {
      Swal.fire('Error en tu compra', 'Tu pedido tiene que tener un producto al menos', 'info')
      return;
    }
    this.formularioPedido.value.Total = this.total
    this.formularioPedido.value.estado = 'NoAtendida'
    this.formularioPedido.value.tipoventa = 'VentaWeb'
    this.pedidoService.crearPedido(this.formularioPedido.value).subscribe({
      next: (r: any) => {
        console.log(r)
        for (let i = 0; i < this.carrito.length; i++) {
          this.pedidoService.crearDetallePedido({
            pedido: r.pedido.uid,
            producto: this.carrito[i].uid,
            talla: this.carrito[i].talla,
            color: this.carrito[i].color,
            cantidad: this.carrito[i].cantidad,
            img: this.carrito[i].img.url
          }).subscribe({
            next: (r) => { console.log(r) },
            error: (e) => { console.log(e) }
          })
        }
      },
      error: (e) => { console.log(e) },
      complete() {
        Swal.fire('Completado!!', 'Pedido realizado correctamente', 'success')
      },
    })
  }
  ngOnInit(): void {
    this.formularioPedido = this.fb.group({
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      direccion: ['', [Validators.required]]
    })
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
