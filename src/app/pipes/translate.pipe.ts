import { Pipe, PipeTransform } from '@angular/core';
import { TRANSLATE } from '../constants/translate'

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {

    const keys = value.split('.');
    let translation = TRANSLATE;

    for (let key of keys) {
      translation = translation[key]
    }

    return translation.toString();
  }

}


