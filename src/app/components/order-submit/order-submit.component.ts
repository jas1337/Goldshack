import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ShoppingService } from '../../services/shopping.service';
import { OrderService } from '../../services/order.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-order-submit',
  templateUrl: './order-submit.component.html',
  styleUrls: ['./order-submit.component.css']
})
export class OrderSubmitComponent implements OnInit {

  user: any = {};
  order: any = {};
  totalPrice: any = 0;
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
        if (profile.user.shoppingCart.length === 0) {
          this.router.navigate(['/shopping-cart']);
        }
        this.user = profile.user;
        this.lastAddress = profile.user.lastAddress;

        for (const item of profile.user.shoppingCart) {
          if (item.newPrice) {
            this.totalPrice += (item.quantity * item.newPrice);
          } else {
            this.totalPrice += (item.quantity * item.price);
          }
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


  submitOrder() {

    const newOrder = {
      userId: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      date: Date.now(),
      shoppingCart: this.user.shoppingCart,
      totalPrice: this.totalPrice,
      fullAddress: this.user.lastAddress
    };

    for (const itemFromCart of newOrder.shoppingCart) {

      const size = itemFromCart.sizes.find(x => x.size === itemFromCart.sizeSelected);
      const index = itemFromCart.sizes.indexOf(size);
      itemFromCart.sizes[index].available -= itemFromCart.quantity;

      this.galleryService.updateAvailability(itemFromCart)
        .subscribe(item => item,
        err => {
          console.log(err);
          return false;
        });

    }

    this.orderService.addOrder(newOrder).subscribe(data => data);
    this.shoppingService.clearCart(this.user).subscribe(data => data);
    this.shoppingService.addAddress(this.user, this.user.lastAddress)
      .subscribe(data => data);
    this.flashMessagesService.show('Your order has been submitted', { cssClass: 'alert-success', timeout: 2000 });
    this.router.navigate(['/profile']);
  }

}
