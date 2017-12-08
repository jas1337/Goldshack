import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { ShoppingService } from '../../shared/services/shopping.service';
import { OrderService } from '../../shared/services/order.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { GalleryService } from '../../shared/services/gallery.service';

@Component({
  selector: 'app-order-submit',
  templateUrl: './order-submit.component.html',
  styleUrls: ['./order-submit.component.css']
})
export class OrderSubmitComponent implements OnInit {

  user: any = {};
  order: any = {};
  totalPrice: Number = 0;
  lastAddress: any;


  constructor(
    private authService: AuthService,
    private galleryService: GalleryService,
    private shoppingService: ShoppingService,
    private flashMessagesService: FlashMessagesService,
    private orderService: OrderService,
    private router: Router

  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        if (profile.user.shoppingCart.length == 0)
          this.router.navigate(['/shopping-cart']);

        this.user = profile.user;
        this.lastAddress = profile.user.lastAddress;

        for (let item of profile.user.shoppingCart)
          this.totalPrice += item.price;
      },
        err => {
          console.log(err);
          return false;
        });
    } else {
      this.router.navigate(['/']);
    }
  }


  submitOrder() {


    let newOrder = {
      userId: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      date: Date.now(),
      shoppingCart: this.user.shoppingCart,
      totalPrice: this.totalPrice,
      fullAddress: this.user.lastAddress
    };

    let iterator = 0;

    for (let itemFromCart of newOrder.shoppingCart) {
      console.log(itemFromCart)

      this.galleryService.getItemById(itemFromCart._id)
        .subscribe(item => {
          // if () {
          //   x.available
          //   iterator++;
          console.log(item.sizes.find(x => x.size === itemFromCart.sizeSelected).available);

          // }
        },
        err => {
          console.log(err);
          return false;
        });

    }

    // this.orderService.addOrder(newOrder).subscribe(data => data);
    // // this.orderService.addOrderToHistory(this.user, newOrder).subscribe(data => data);
    // this.shoppingService.clearCart(this.user).subscribe(data => data);
    // this.shoppingService.addAddress(this.user, this.user.lastAddress)
    //   .subscribe(data => data);
    // this.flashMessagesService.show('Your order has been submitted', { cssClass: 'alert-success', timeout: 2000 });
    // this.router.navigate(['/profile'])

  }

}
