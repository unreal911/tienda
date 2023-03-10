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
import { HttpClientModule } from "@angular/common/http";
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CategoriasComponent } from './complementos/categorias/categorias.component';
import { ListBlogComponent } from './complementos/list-blog/list-blog.component';
import { BlogComponent } from './blog/blog.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ShopComponent,
    ContactenosComponent,
    CarritoComponent,
    NoagefoundComponent,
    ProductoDetalleComponent,
    CategoriasComponent,
    ListBlogComponent,
    BlogComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
