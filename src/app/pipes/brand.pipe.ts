import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../modules/brandModel';

@Pipe({
  name: 'brandPipe'
})
export class BrandPipe implements PipeTransform {


    transform(value: Brand[], filterBrand: string): Brand[] {
      filterBrand = filterBrand?filterBrand.toLocaleLowerCase():""
      return filterBrand?value
      .filter((c:Brand)=>c.brandName.toLocaleLowerCase()
      .indexOf(filterBrand)!==-1):value
    }
  
  }


