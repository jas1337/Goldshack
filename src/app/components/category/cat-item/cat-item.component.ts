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
  shoppingCart: any = [];
  available: any;
  buyForm: NgForm;
  imageSelected: any = 0;

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
        if (item.notFound)
          this.router.navigate(['/404']);
        else {
          this.item = item;
        }
      },
      err => {
        console.log(err);
        return false;
      });
    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        this.user_id = profile.user.id
        this.shoppingCart = profile.user.shoppingCart;
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
            newPrice: undefined,
            sizes: this.item.sizes,
            img: this.item.imgs[0],
            sizeSelected: this.item.sizes[sizeSelected].size,
            quantity: 1
          }
          if (this.item.newPrice) {
            itemAdded.newPrice = this.item.newPrice
          }

          let itemFromCart = (this.shoppingCart.find(x => x._id === this.item._id
            && x.sizeSelected === this.item.sizes[sizeSelected].size))

          for (let item of this.shoppingCart) {
            if (item === itemFromCart) {
              itemAdded.quantity = itemFromCart.quantity + 1;

              this.shoppingService.removeFromCart(this.user, this.shoppingCart.indexOf(itemFromCart))
                .subscribe(data => data)
            }
          }

          this.shoppingService.addToCart(this.user, itemAdded)
            .subscribe(data => data)
          this.flashMessagesService.show('Item added to cart', { cssClass: 'alert-success', timeout: 1500 });
        } else {
          this.flashMessagesService.show('Sorry, the product has run out', { cssClass: 'alert-danger', timeout: 1500 });
        }
      })

  }

  onSizeSelect() {
    if (this.item) {
      this.available = this.item.sizes[this.sizeSelected].available;

      let itemFromCart = (this.shoppingCart.find(x => x._id === this.item._id
        && x.sizeSelected === this.item.sizes[this.sizeSelected].size
      ))
      if (itemFromCart)
        this.available -= itemFromCart.quantity;
    }
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

  selectImage(i) {
    this.imageSelected = i;
  }
}


