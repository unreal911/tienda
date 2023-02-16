import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const api_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }
  listarSliders() {
    const url = `${api_url}/slider`
    return this.http.get(url)
  }

}
