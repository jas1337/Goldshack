import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { isDevMode } from '@angular/core';

@Injectable()
export class ShoppingService {

  isDev: boolean;
  constructor(private http: Http) {
    this.isDev = isDevMode();
    // this.isDev = false;
  }

  // updates user.addressList - data from form in address-details
  addAddress(user: any, fullAddress: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('users/updateAddressList/');
    // checks whether the address already exists in addtessList
    const addressExist = user.addressList.some(x =>
      x.address === fullAddress.address &&
      x.postalCode === fullAddress.postalCode &&
      x.city === fullAddress.city &&
      x.country === fullAddress.country
    );
    if (!addressExist) {
      user.addressList.push(fullAddress);
    }
    return this.http.put(ep + user.id, user, { headers: headers })
      .map(res => res.json());
  }

  setLastAddress(user: any, lastAddress: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('users/setLastAddress/');
    user.lastAddress = lastAddress;
    return this.http.put(ep + user.id, user, { headers: headers })
      .map(res => res.json());
  }

  // Adds item to user.shoppingCart
  addToCart(user: any, itemAdded: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('users/updateCart/');
    user.shoppingCart.push(itemAdded);
    return this.http.put(ep + user.id, user, { headers: headers })
      .map(res => res.json());
  }

  removeFromCart(user: any, itemRemoved: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('users/updateCart/');
    user.shoppingCart.splice(itemRemoved, 1);
    return this.http.put(ep + user.id, user, { headers: headers })
      .map(res => res.json());
  }

  clearCart(user: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('users/updateCart/');
    user.shoppingCart = [];
    return this.http.put(ep + user.id, user, { headers: headers })
      .map(res => res.json());
  }
  prepEndpoint(ep) {
    if (this.isDev) {
      return 'http://localhost:3000/' + ep;
    } else {
      return ep;
    }
  }
}
