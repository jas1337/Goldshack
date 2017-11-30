import { Component, OnInit } from '@angular/core';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { GalleryService } from '../../../shared/services/gallery.service';

@Component({
  selector: 'app-cat-gallery',
  templateUrl: './cat-gallery.component.html',
  styleUrls: ['./cat-gallery.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CatGalleryComponent implements OnInit {

  items: any[];
  itemsFiltered: any[];
  brands: any[];
  selectedBrand = "Show all";
  minPrice: Number = 0;
  maxPrice: Number = 3000
  sizes: any[];
  selectedSize = "Show all";

  constructor(
    private galleryService: GalleryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.switchMap((params: Params) => this.galleryService.getItemsByCat(params['category']))
      .subscribe(items => {
        this.items = items
        this.itemsFiltered = items;



        //Clear list of brands and sizes and put them by category
        this.sizes = []
        this.brands = []
        for (let item of items) {
          if (!this.brands.some(x => x === item.brand)) {
            this.brands.push(item.brand)
          }
          for (let i = 0; i < item.sizes.length; i++) {
            if (!this.sizes.some(x => x === item.sizes[i].size)) {
              this.sizes.push(item.sizes[i].size)
            }
          }
        }
        //If no items in category goto 404
        if (this.items.length <= 0)
          this.router.navigate(['/404']);
      });
  }



  filterChange() {



    if (this.minPrice < 0 || this.minPrice > this.maxPrice)
      this.minPrice = 0;

    if (this.maxPrice < 0 || this.maxPrice < this.minPrice || this.maxPrice > 3000)
      this.maxPrice = 3000


    this.itemsFiltered = this.items.filter(item =>
      item.price >= this.minPrice
      && item.price <= this.maxPrice
      && (item.brand == this.selectedBrand || this.selectedBrand == "Show all")
      && (item.sizes.some(x => x.size == this.selectedSize && x.available > 0) || this.selectedSize == "Show all")
    );
  }



}
