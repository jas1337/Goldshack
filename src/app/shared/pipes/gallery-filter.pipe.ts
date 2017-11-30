import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'galleryFilter'
})
export class GalleryFilterPipe implements PipeTransform {

  transform(items: any[]): any {

    let setOfItems: any[];

    for (let item of items) {
      if (!setOfItems.some(x => x == item)) {
        setOfItems.push(item)
      }
    }

    return setOfItems;

  }
}
