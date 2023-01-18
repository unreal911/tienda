import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
declare function magnificPrincipal(): any
declare function initMagnific(): any
declare function select2principal(): any
declare function initSelec2(): any
declare function iniciarSlick3(): any
declare function iniciarSlicksPrincipal(): any
declare function iniciarWrapProduct():any
declare var $: any
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  public producto: any
  public imgProducto: any
  constructor(

    private productoService: ProductoService,
    private route: ActivatedRoute
  ) {
    this.producto = { nombre: '', precio: 0 };

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
  agregarCarrito(cantidad:any){
    console.log(cantidad)
    console.log(this.producto.uid)
  }
}
