import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../../components/home-page/home-page.component';
import { CategoryComponent } from '../../components/category/category.component';
import { RegistrationComponent } from '../../components/registration/registration.component';
import { CatItemComponent } from '../../components/category/cat-item/cat-item.component';
import { NotFoundComponent } from '../../components/errors/not-found/not-found.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';
import { AddressDetailsComponent } from '../../components/address-details/address-details.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: 'item/:_id', component: CatItemComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'address-details', component: AddressDetailsComponent },
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
