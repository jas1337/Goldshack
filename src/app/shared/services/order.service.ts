import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  addOrder(order: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // console.log(order);
    return this.http.post('orders/addOrder', order, { headers: headers })
      .map(res => res.json());
  }

  getOrdersByUserId(id: any): Observable<any> {
    // console.log(id)
    return this.http.get('orders/getOrdersByUserId/' + id)
      .map(res => res.json());
  }
}
