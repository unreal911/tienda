import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const api_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {
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
}
