import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { Translate } from './constants/translate';

import { RoutingModule } from './routing/routing.module';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { GalleryService } from './services/gallery.service';
import { ShoppingService } from './services/shopping.service';
import { OrderService } from './services/order.service';

import { TruncatePipe } from './pipes/truncate.pipe';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemsGalleryComponent } from './components/items-gallery/items-gallery.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ItemOpinionsComponent } from './components/single-item/item-opinions/item-opinions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OrderSubmitComponent } from './components/order-submit/order-submit.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    ItemsGalleryComponent,
    RegistrationComponent,
    TruncatePipe,
    SingleItemComponent,
    NotFoundComponent,
    ItemOpinionsComponent,
    ProfileComponent,
    ShoppingCartComponent,
    AddressDetailsComponent,
    HomePageComponent,
    OrderSubmitComponent,
    SidebarNavigationComponent,
    LoginModalComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    FlashMessagesModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    GalleryService,
    ShoppingService,
    OrderService
  ],
  entryComponents: [LoginModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
