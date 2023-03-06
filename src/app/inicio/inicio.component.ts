import { Component, OnInit } from '@angular/core';
import { SliderService } from '../services/slider.service';
declare function iniciarSlicks(): any
declare function iniciarSlicksPrincipal(): any
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public sliders:any[]=[]
  constructor(private sliderServices: SliderService) { }

  ngOnInit(): void {

    iniciarSlicksPrincipal()
    this.listarSlids()
    setTimeout(() => {
      iniciarSlicks()
    }, 1000);
  }
  listarSlids() {
    this.sliderServices.listarSliders().subscribe({
      next: (r:any) => {
        this.sliders=r.sliders
        console.log(this.sliders)
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

}
