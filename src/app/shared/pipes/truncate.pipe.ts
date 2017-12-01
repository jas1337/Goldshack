import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    let limit = 12;
    let trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
