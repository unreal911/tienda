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
  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.CarritoCart.subscribe((carritoCart) => {
      this.carrito = carritoCart
    })
  }

}
