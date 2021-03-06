import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { isDevMode } from '@angular/core';

@Injectable()
export class OrderService {

  isDev: boolean;
  constructor(private http: Http) {
    this.isDev = isDevMode();
    // this.isDev = false;
  }

  addOrder(order: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('orders/addOrder');
    return this.http.post(ep, order, { headers: headers })
      .map(res => res.json());
  }

  getOrdersByUserId(id: any): Observable<any> {
    const ep = this.prepEndpoint('orders/getOrdersByUserId/');
    return this.http.get(ep + id)
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
