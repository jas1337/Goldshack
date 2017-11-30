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
    console.log(order);
    return this.http.post('http://localhost:3000/orders/addOrder', order, { headers: headers })
      .map(res => res.json());
  }
}
