import { Component, OnInit } from '@angular/core';
declare function iniciarSlicks(): any
declare function inicioMain(): any
declare function iniciarSlicksPrincipal(): any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda';
  ngOnInit(): void {

    inicioMain()
    iniciarSlicks()
    iniciarSlicksPrincipal()
  }
}
