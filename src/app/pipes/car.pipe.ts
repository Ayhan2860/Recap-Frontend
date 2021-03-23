import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../modules/carModel';

@Pipe({
  name: 'carPipe'
})
export class CarPipe implements PipeTransform {

  transform(value: Car[], filterCar: string): Car[] {
  return filterCar?value
  .filter((c:any) => this.matchValue(c,filterCar))
  :value;

  }
  matchValue(cr:any, filterCar:string) {
    return Object.keys(cr).map((key) => {
       return new RegExp(filterCar, 'gi').test(cr[key]);
    }).some(result => result);
  }
}
