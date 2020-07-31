import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let output = '';

    for (let i = value.length; i > -1; i--) {
      output += value.charAt(i);
    }

    return output;
  }

}
