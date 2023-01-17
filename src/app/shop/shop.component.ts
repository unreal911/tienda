import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../services/producto.service';

declare function magnificPrincipal(): any
declare function initMagnific(): any
declare function select2principal(): any
declare function initSelec2(): any
declare function showFilter(): any
declare var $: any
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  //@ViewChild()
  public desde: number = 0
  public limite: number = 100
  public vistaProducto: any[] = []
  public  vistaProductoTemp :any[]=[]
  listarCategoria: any[] = []
  listarProductos: any[] = []
  removeAllStyles: boolean = false

  constructor(private productoService: ProductoService) {
  }

  ngOnInit(): void {
    initMagnific()
    select2principal()
    initSelec2()
    showFilter()
    //
    this.productoService.ListarCaregorias(this.desde, this.limite).subscribe(
      {
        next: (r: any) => {
          console.log(r)
          this.listarCategoria = r.categorias
          magnificPrincipal()
        },
        error: (e) => { console.log(e) },
        complete() {
        },
      }
    )
    this.mostrarProductos()

  }
  buscarProductos(parametro: string) {
    console.log(parametro)
    if(parametro.length==0){
      this.listarProductos=this.vistaProductoTemp
      return;
    }
    this.productoService.buscarProducto('productos',parametro).subscribe({
      next:(r:any)=>{
        this.listarProductos=r.resultados
        console.log(r)

      },
      error:(e)=>{console.log(e)}
    })
  }
  mostrarProductos() {
    this.productoService.listarProductos(this.desde, this.limite).subscribe(
      {
        next: (r: any) => {
          console.log(r)
          this.listarProductos = r.productos
          this.vistaProductoTemp=r.productos
        },
        error: (e) => { console.log(e) }
      }
    )
  }
  mostrarSelec(categoria: string) {
    this.productoService.ProductoxCategoria(categoria).subscribe({
      next: (r: any) => {
        this.listarProductos = r.productos
        this.vistaProductoTemp=r.productos
        console.log(r)
      },
      error: (e) => { console.log(e) }
    })
    console.log(categoria)
  }

}
