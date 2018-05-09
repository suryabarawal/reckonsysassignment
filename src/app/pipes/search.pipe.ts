import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: Array<any>, keys: Array<string>, searchText: string): Array<any> {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    let nestedKeys;
    return items.filter((item) => {
      return keys.some((key) => {
        nestedKeys = key.split('.');
        if (nestedKeys.length === 1) {
          if (typeof item[key] === 'undefined') {
            item[key] = '';
          }
          return item[key].toString().toLowerCase().includes(searchText.toLowerCase());
        } else {
          let value = nestedKeys.reduce((acc, currValue) => {
            return acc[currValue];
          }, item);
          value = value ? value : '';
          return value.toString().toLowerCase().includes(searchText.toLowerCase());
        }
      });
    });
  }
}
