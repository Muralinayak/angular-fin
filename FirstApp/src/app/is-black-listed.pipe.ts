import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isBlackListed'
})
export class IsBlackListedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value =='stupid' || value=="idiot" || value=='useless'){
      return "Bad words not allowed!!";
    }
    return"Thank for the good word";
  }

}
