import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'boolean'})
export class BooleanPipe implements PipeTransform {
  transform(value: string | boolean): string {
    if (!value || value.toString().toUpperCase() == 'FALSE') {
      return 'No';
    } else {
      return 'Yes';
    }
  }
}
