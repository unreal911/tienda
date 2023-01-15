import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardPanelComponent } from './card-panel/card-panel.component';
import { BreadComponent } from './bread/bread.component';
import { FooterComponent } from './footer/footer.component';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardPanelComponent,
    BreadComponent,
    FooterComponent,
    ModalProductComponent,
    AsideComponent
  ],
  exports: [
    HeaderComponent,
    CardPanelComponent,
    BreadComponent,
    FooterComponent,
    ModalProductComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
