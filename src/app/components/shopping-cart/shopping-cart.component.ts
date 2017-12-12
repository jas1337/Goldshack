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
  totalPrice: any = 0;

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

        for (let item of this.shoppingCart) {
          if (item.newPrice)
            this.totalPrice += (item.quantity * item.newPrice);
          else
            this.totalPrice += (item.quantity * item.price);
        }




        if (!this.authService.loggedIn()) {
          this.router.navigate(['/']);
        }
      },
        err => {
          console.log(err);
          return false;
        });
    } else {
      this.router.navigate(['/']);
    }
  }

  removeFromCart(itemRemoved) {


    if (this.shoppingCart[itemRemoved].newPrice)
      this.totalPrice -= (this.shoppingCart[itemRemoved].quantity * this.shoppingCart[itemRemoved].newPrice);
    else
      this.totalPrice -= (this.shoppingCart[itemRemoved].quantity * this.shoppingCart[itemRemoved].price);

    this.shoppingService.removeFromCart(this.user, itemRemoved)
      .subscribe(data => data)
  }
}
