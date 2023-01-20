import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
declare function magnificPrincipal(): any
declare function initMagnific(): any
declare function select2principal(): any
declare function initSelec2(): any
declare function iniciarSlick3(): any
declare function iniciarSlicksPrincipal(): any
declare function iniciarWrapProduct(): any
declare var $: any
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  public producto: any
  public imgProducto: any
  public tallaActual: any
  public ColorActual: any
  public productoAgregado: any
  constructor(

    private productoService: ProductoService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.producto = { nombre: '', precio: 0 };

  }
  changeTalla(valor: any) {
    console.log('hola es talla')
    this.tallaActual = valor
  }
  changeColor(valor: any) {
    console.log('hola es color')
    this.ColorActual = valor
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id')
      this.getProducto(id)
    })
    this.iniciarScripts()
    setTimeout(() => {
      iniciarSlick3()
    }, 500);
  }
  iniciarScripts() {
    magnificPrincipal()
    initMagnific()
    select2principal()
    initSelec2()
    iniciarSlicksPrincipal()
    iniciarWrapProduct()
  }
  getProducto(id: any) {
    this.productoService.productoId(id).subscribe({
      next: (r: any) => {
        this.producto = r.producto
        this.imgProducto = r.producto.img
      },
      error: (e) => { console.log(e) },
      complete() {

      },
    })
  }
  agregarCarrito(cantidad: any) {
    //this.toastr.success('Producto Agregado', 'Accion realiazada!!!');
    //console.log(cantidad)
    console.log(this.producto.uid)
    this.productoAgregado = {
      uid: this.producto.uid,
      nombre:this.producto.nombre,
      precio: this.producto.precio,
      color: this.ColorActual,
      talla: this.tallaActual,
      cantidad: parseInt(cantidad) ,
      img:this.producto.img[0]
    }
    if(this.productoAgregado.talla == undefined ){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Seleccione una talla primero',
        showConfirmButton: false,
        timer: 1000
      })
      return;
    }
    if(this.productoAgregado.color == undefined){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Seleccione un color primero',
        showConfirmButton: false,
        timer: 1000
      })
      console.log(this.producto)
      return;
    }
    this.productoService.agreagarProductoCarrito(this.productoAgregado)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 1000
    })
  }
}
