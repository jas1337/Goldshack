import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { CatListComponent } from './components/category/cat-list/cat-list.component';
import { CatGalleryComponent } from './components/category/cat-gallery/cat-gallery.component';
import { RegistrationComponent } from './components/registration/registration.component'

import { RoutingModule } from './shared/routing/routing.module';
import { ValidateService } from './shared/services/validate.service';
import { AuthService } from './shared/services/auth.service';
import { GalleryService } from './shared/services/gallery.service';
import { ShoppingService } from './shared/services/shopping.service';
import { OrderService } from './shared/services/order.service';

import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { CatItemComponent } from './components/category/cat-item/cat-item.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ItemOpinionsComponent } from './components/category/cat-item/item-opinions/item-opinions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { GalleryFilterPipe } from './shared/pipes/gallery-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CategoryComponent,
    CatListComponent,
    CatGalleryComponent,
    RegistrationComponent,
    TruncatePipe,
    CatItemComponent,
    NotFoundComponent,
    ItemOpinionsComponent,
    ProfileComponent,
    ShoppingCartComponent,
    AddressDetailsComponent,
    GalleryFilterPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    FlashMessagesModule,
    HttpModule
  ],
  providers: [ValidateService, AuthService, GalleryService, ShoppingService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
