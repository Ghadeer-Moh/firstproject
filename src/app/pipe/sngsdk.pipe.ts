import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sngsdk'
})
export class SngsdkPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[rate] = args;
    return value*rate;
  }

}
