import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ShopComponent } from './shop/shop.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { SharedModule } from './shared/shared.module';
import { NoagefoundComponent } from './noagefound/noagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ShopComponent,
    ContactenosComponent,
    CarritoComponent,
    NoagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
