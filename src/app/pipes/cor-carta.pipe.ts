import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'corCarta'
})
export class CorCartaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
