import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSort'
})
export class StringSortPipe implements PipeTransform {

  transform(arr: Array<any>, propName: string, dir: string): any {
    arr.sort((a: any, b: any) => {
      if (a[propName] > b[propName]) {
        return (dir === 'asc') ? 1 : -1;
      } else if (b[propName] > a[propName]) {
        return (dir === 'asc') ? -1 : 1;
      } else {
        return 0;
      }
    });

    return arr;
  }

}
