import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import { GalleryService } from '../../../shared/services/gallery.service';
import { AuthService } from '../../../shared/services/auth.service';
import { ShoppingService } from '../../../shared/services/shopping.service';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CatItemComponent implements OnInit {

  user: Object;
  user_id: any;
  item: any;
  sizeSelected: any;
  available: any;
  buyForm: NgForm;

  onSizeSelect() {
    if (this.item) {
      this.available = this.item.sizes[this.sizeSelected].available;
    }
  }



  constructor(
    private galleryService: GalleryService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private flashMessagesService: FlashMessagesService,
    private shoppingService: ShoppingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.switchMap((params: Params) => this.galleryService.getItemById(params['_id']))
      .subscribe(item => {
        this.item = item;
        if (this.item == undefined) {
          this.router.navigate(['/404']);
        }
      });

    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        this.user_id = profile.user.id
      },
        err => {
          console.log(err);
          return false;
        });
    }

  }
  addToCart(sizeSelected) {

    this.galleryService.getItemById(this.item._id)
      .subscribe(item => {
        this.available = item.sizes[sizeSelected].available;

        if (this.available > 0) {
          let itemAdded = {
            _id: this.item._id,
            brand: this.item.brand,
            name: this.item.name,
            price: this.item.price,
            img: this.item.imgs[0],
            sizeSelected: this.item.sizes[sizeSelected].size,
            category: this.item.category,
            subcategory: this.item.subcategory,
          }
          this.shoppingService.addToCart(this.user, itemAdded)
            .subscribe(data => data)
          this.flashMessagesService.show('Item added to cart', { cssClass: 'alert-success', timeout: 1500 });
        } else {
          this.flashMessagesService.show('Sorry, the product has run out ', { cssClass: 'alert-danger', timeout: 1500 });
        }
      })

  }

  onOpinionAdded(opinion: { name: string; opinionText: string; }) {
    this.item.opinions.push(opinion);
    this.galleryService.updateOpinions(this.item)
      .subscribe(data => data)
  }

  opinionDelete(index: number) {
    this.item.opinions.splice(index, 1);
    this.galleryService.updateOpinions(this.item)
      .subscribe(data => data)
  }
}


