import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { }

  updateOpinions(item: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('items/updateOpinions/' + item._id, item, { headers: headers })
      .map(res => res.json());
  }

  updateAvailability(item: any) {
    let headers = new Headers();
    console.log(item)
    headers.append('Content-Type', 'application/json');
    return this.http.put('items/updateAvailability/' + item._id, item, { headers: headers })
      .map(res => res.json());
  }

  getItemById(_id: any): Observable<any> {
    return this.http.get('items/getItemById/' + _id)
      .map(res => res.json());
  }

  getItemsByCat(category: any): Observable<any> {

    return this.http.get('items/getItemByCat/' + category)
      .map(res => res.json());
  }

}

