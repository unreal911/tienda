import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const api_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }
  crearPedido(body: any) {
    const url = `${api_url}/pedido`
    return this.http.post(url, body)
  }
  crearDetallePedido(body: any) {
    const url = `${api_url}/detallepedido`
    return this.http.post(url, body)
  }
}
