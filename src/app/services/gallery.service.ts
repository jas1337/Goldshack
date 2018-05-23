import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { isDevMode } from '@angular/core';

@Injectable()
export class GalleryService {

  isDev: boolean;
  constructor(private http: Http) {
    this.isDev = isDevMode();
    // this.isDev = false;
  }

  updateOpinions(item: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('items/updateOpinions/');
    return this.http.put(ep + item._id, item, { headers: headers })
      .map(res => res.json());
  }

  updateAvailability(item: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('items/updateAvailability/');
    return this.http.put(ep + item._id, item, { headers: headers })
      .map(res => res.json());
  }

  getItemById(_id: any): Observable<any> {
    const ep = this.prepEndpoint('items/getItemById/');
    return this.http.get(ep + _id)
      .map(res => res.json());
  }

  getItemsByCat(category: any): Observable<any> {
    const ep = this.prepEndpoint('items/getItemByCat/');
    return this.http.get(ep + category)
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

