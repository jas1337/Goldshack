import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { ShoppingService } from '../../shared/services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ShoppingCartComponent implements OnInit {

  user: Object;
  shoppingCart: any;

  constructor(
    private authService: AuthService,
    private shoppingService: ShoppingService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        this.shoppingCart = profile.user.shoppingCart;
      },
        err => {
          console.log(err);
          return false;
        });
    } else {
      this.router.navigate(['/']);
    }
  }

  //shoppingCart becomes object in orderHistory array
  // submitOrder() {

  //   if (this.shoppingCart.length > 0 && this.shoppingCart != 'foobar') {

  //     // console.log(this.user);
  //     console.log(this.shoppingCart);
  //     this.shoppingService.submitOrder(this.user, this.shoppingCart)
  //       .subscribe(data => data)
  //     this.flashMessagesService.show('Order has been submitted', { cssClass: 'alert-success', timeout: 1500 });
  //     console.log(this.user);
  //   }
  // }

  removeFromCart(itemRemoved) {
    this.shoppingService.removeFromCart(this.user, itemRemoved)
      .subscribe(data => data)
    this.flashMessagesService.show('Item removed from cart', { cssClass: 'alert-success', timeout: 1500 });
  }

}
