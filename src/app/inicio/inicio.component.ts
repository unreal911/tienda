import { Component, OnInit } from '@angular/core';
declare function iniciarSlicks():any
declare function iniciarSlicksPrincipal():any
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    iniciarSlicks()
    iniciarSlicksPrincipal()
  }

}
