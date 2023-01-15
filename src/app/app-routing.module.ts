import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NoagefoundComponent } from './noagefound/noagefound.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', component: NoagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
