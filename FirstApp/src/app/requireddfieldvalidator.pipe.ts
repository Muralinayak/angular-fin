import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requireddfieldvalidator'
})
export class RequireddfieldvalidatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value =='**' || value=="##" ){
      return "color changed";
    }
    return"no change..!";
  }
  }


