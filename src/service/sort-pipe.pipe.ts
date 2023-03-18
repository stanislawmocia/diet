import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {
  // transform function to sort array by name of variable in object
  transform(array: any[], variable: string) {
    return array.sort((a, b) => {
      return a[variable].localeCompare(b[variable]);
    });
  }
}
