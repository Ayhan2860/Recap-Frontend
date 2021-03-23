import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../modules/colorModel';

@Pipe({
  name: 'colorPipe'
})
export class ColorPipe implements PipeTransform {

  transform(value: Color[], filterColor: string): Color[] {
    filterColor = filterColor?filterColor.toLocaleLowerCase():""
    return filterColor?value
    .filter((c:Color)=>c.colorName.toLocaleLowerCase()
    .indexOf(filterColor)!==-1):value
  }

}
