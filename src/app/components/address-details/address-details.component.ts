import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { ShoppingService } from '../../shared/services/shopping.service';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AddressDetailsComponent implements OnInit {

  user: any = {};
  address: String;
  order: any = {};

  postalCode: String;
  city: String;
  country: String;
  addressForm: NgForm;

  constructor(
    private authService: AuthService,
    private shoppingService: ShoppingService,
    private orderService: OrderService,
    private router: Router

  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        console.log(this.user)
        if (profile.user.shoppingCart.length == 0)
          this.router.navigate(['/']);
      },
        err => {
          console.log(err);
          return false;
        });
    } else {
      this.router.navigate(['/']);
    }
  }

  setAddress(i) {
    this.address = this.user.addressList[i].address,
      this.postalCode = this.user.addressList[i].postalCode,
      this.city = this.user.addressList[i].city,
      this.country = this.user.addressList[i].country
  }

  submitAddress() {
    let fullAddress = {
      address: this.address,
      postalCode: this.postalCode,
      city: this.city,
      country: this.country
    }
    //adding addres to user.addressList
    this.shoppingService.addAddress(this.user, fullAddress)
      .subscribe(data => data);

    let newOrder = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      date: Date.now(),
      shoppingCart: this.user.shoppingCart,
      totalPrice: 300,
      fullAddress: fullAddress
    };
    this.orderService.addOrder(newOrder).subscribe(data => data);
  }

}
