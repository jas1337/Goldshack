import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ShoppingService {

  constructor(private http: Http) { }

  //updates user.addressList - data from form in address-details
  addAddress(user: any, fullAddress: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    //checks whether the address already exists in addtessList
    let addressExist = user.addressList.some(x =>
      x.address === fullAddress.address &&
      x.postalCode === fullAddress.postalCode &&
      x.city === fullAddress.city &&
      x.country === fullAddress.country
    );
    if (!addressExist) {
      user.addressList.push(fullAddress);
    }
    return this.http.put('users/updateAddressList/' + user.id, user, { headers: headers })
      .map(res => res.json());
  }

  setLastAddress(user: any, lastAddress: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    user.lastAddress = lastAddress;
    return this.http.put('users/setLastAddress/' + user.id, user, { headers: headers })
      .map(res => res.json());
  }

  //Adds item to user.shoppingCart 
  addToCart(user: any, itemAdded: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    user.shoppingCart.push(itemAdded);
    return this.http.put('users/updateCart/' + user.id, user, { headers: headers })
      .map(res => res.json());
  }

  removeFromCart(user: any, itemRemoved: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    user.shoppingCart.splice(itemRemoved, 1);
    return this.http.put('users/updateCart/' + user.id, user, { headers: headers })
      .map(res => res.json());
  }

  clearCart(user: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    user.shoppingCart = [];
    return this.http.put('users/updateCart/' + user.id, user, { headers: headers })
      .map(res => res.json());
  }

}
