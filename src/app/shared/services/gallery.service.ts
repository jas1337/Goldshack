import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GalleryService {

  isDev: boolean;
  constructor(private http: Http) {
    // this.isDev = true;
    this.isDev = false;
  }

  updateOpinions(item: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('items/updateOpinions/');
    return this.http.put(ep + item._id, item, { headers: headers })
      .map(res => res.json());
  }

  updateAvailability(item: any) {
    let headers = new Headers();
    console.log(item)
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('items/updateAvailability/');
    return this.http.put(ep + item._id, item, { headers: headers })
      .map(res => res.json());
  }

  getItemById(_id: any): Observable<any> {
    let ep = this.prepEndpoint('items/getItemById/');
    return this.http.get(ep + _id)
      .map(res => res.json());
  }

  getItemsByCat(category: any): Observable<any> {
    let ep = this.prepEndpoint('items/getItemByCat/');
    return this.http.get(ep + category)
      .map(res => res.json());
  }
  prepEndpoint(ep) {
    if (this.isDev)
      return 'http://localhost:3000/' + ep;
    else
      return ep;
  }

}

