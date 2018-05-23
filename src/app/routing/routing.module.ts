import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../components/home-page/home-page.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { SingleItemComponent } from '../components/single-item/single-item.component';
import { ItemsGalleryComponent } from '../components/items-gallery/items-gallery.component';
import { NotFoundComponent } from '../components/errors/not-found/not-found.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { AddressDetailsComponent } from '../components/address-details/address-details.component';
import { OrderSubmitComponent } from '../components/order-submit/order-submit.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'category/:category', component: ItemsGalleryComponent },
  { path: 'item/:_id', component: SingleItemComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'address-details', component: AddressDetailsComponent },
  { path: 'order-submit', component: OrderSubmitComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
