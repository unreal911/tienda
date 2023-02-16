import { Component, OnInit } from '@angular/core';
import { carrito } from 'src/app/interfaces/carrito';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-card-panel',
  templateUrl: './card-panel.component.html',
  styleUrls: ['./card-panel.component.css']
})
export class CardPanelComponent implements OnInit {
  public carrito: carrito[] = []
  public total :number=0
  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.CarritoCart.subscribe((carritoCart) => {
      this.carrito = carritoCart
      console.log(this.carrito)
    })
    this.productoService.precioTotal.subscribe((precioTotal)=>{
      this.total=precioTotal
      console.log(precioTotal)
    })
  }
  eliminarFilaCarrito(i:number){
    this.productoService.eliminarFila(i)
    console.log('Click')
  }


}
