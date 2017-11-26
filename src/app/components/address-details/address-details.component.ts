import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { ShoppingService } from '../../shared/services/shopping.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AddressDetailsComponent implements OnInit {

  user: any = {};
  address: String;
  postalCode: String;
  city: String;
  country: String;
  addressForm: NgForm;

  constructor(
    private authService: AuthService,
    private shoppingService: ShoppingService,
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
    //dodac funkcje która do koszyka dodaje adress ale tylko jeden raz!
    // moze rozbic to do innego componentu i od razu wsadzac do obiektu order??

    //adding addres to user.addressList
    this.shoppingService.addAddress(this.user, fullAddress)
      .subscribe(data => data);

    this.shoppingService.setLastAddress(this.user, fullAddress)
      .subscribe(data => data);

  }

}
