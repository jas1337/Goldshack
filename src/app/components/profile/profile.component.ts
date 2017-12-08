import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { OrderService } from '../../shared/services/order.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  user: any = {};
  orders: any = [];

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        if (!this.authService.loggedIn()) {
          this.router.navigate(['/']);
        }
        this.user = profile.user;


        this.orderService.getOrdersByUserId(this.user.id).subscribe(orders => {
          this.orders = orders
          console.log(this.orders)
        });
      },
        err => {
          console.log(err);
          return false;
        });
    } else {
      this.router.navigate(['/']);
    }





  }

}
