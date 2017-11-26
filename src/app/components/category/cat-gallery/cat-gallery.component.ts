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

  constructor(
    private galleryService: GalleryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.switchMap((params: Params) => this.galleryService.getItemsByCat(params['category']))
      .subscribe(items => {
        this.items = items
        if (this.items.length <= 0)
          this.router.navigate(['/404']);
      });
  }

  // gotoGalleryItem(): void {
  //   this.router.navigate(['/gallery-item', this.selectedGalleryItem.id]);
  // }

  // onCategorySelected(category: string) {

  //   this.categorySelected = category;
  // }

}
