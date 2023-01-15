import { Component, OnInit} from '@angular/core';

declare function magnificPrincipal():any
declare function initMagnific():any
declare function iniciarIsotope():any
declare function iniciarModal():any
declare function select2principal():any
declare function initSelec2():any
declare var $:any
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    iniciarIsotope()
    magnificPrincipal()
    initMagnific()
    iniciarModal()
    select2principal()
    initSelec2()

  }

}
