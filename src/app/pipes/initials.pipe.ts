import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    if(value=='Male'){
      return 'Mr. '
    }
    return 'Mrs. '
  }

}
