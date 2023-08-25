[10:48 AM, 8/24/2023] GERSHON PAUL: app.module.ts
[10:48 AM, 8/24/2023] GERSHON PAUL: import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(fromcurrency: number, toCurrency: number,amount: number): any {
      return Math.round(toCurrency*amount/fromcurrency) 
  }

}
