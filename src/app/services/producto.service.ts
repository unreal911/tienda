import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { carrito } from '../interfaces/carrito';
const api_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public carrito: carrito[] = []
  public cantidadCarrito = new EventEmitter<number>();
  public CarritoCart = new EventEmitter<carrito[]>();
  constructor(private http: HttpClient) {
  }

  agreagarProductoCarrito(producto: any) {
    //console.log(producto.cantidad)
    if (this.carrito.length == 0) {
      this.carrito.push(producto)
    }
    let item = this.carrito.find(x => x.uid == producto.uid && x.talla == producto.talla && x.color == producto.color);
    if (item) {
      item.cantidad += producto.cantidad;
    } else {
      this.carrito.push(producto);
    }
    console.log(this.carrito)
    this.cantidadCarrito.emit(this.carrito.length);
    this.CarritoCart.emit(this.carrito);

  }
  ListarCaregorias(desde: number, limite: number) {
    const url = `${api_url}/categoria/listarPublico/${desde}/${limite}`
    return this.http.get(url)
  }
  listarProductos(desde: number, limite: number) {
    const url = `${api_url}/producto/listarPublico/${desde}/${limite}`
    return this.http.get(url)
  }
  ProductoxCategoria(categoria: string) {
    const url = `${api_url}/busqueda/publico/${categoria}`
    return this.http.get(url)
  }
  buscarProducto(coleccion: string, producto: string,) {
    const url = `${api_url}/busqueda/publico/coleccion/${coleccion}/${producto}`
    return this.http.get(url)
  }
  productoId(id: string) {
    const url = `${api_url}/producto/id/${id}`
    return this.http.get(url)
  }
}
