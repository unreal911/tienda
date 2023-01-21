import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public xcantidad = 0
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.cantidadCarrito.subscribe((xcantidad) => {
      this.xcantidad = xcantidad;
      console.log(xcantidad)
    });
  }

}
