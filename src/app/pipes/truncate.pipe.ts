import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    const limit = 12;
    const trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
