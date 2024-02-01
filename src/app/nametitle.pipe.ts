import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nametitle',
  standalone: true
})
export class NametitlePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    
    if(gender === 'male'){
      return "Mr. " + name;
    }
    else
    return "Miss. " + name;
  }

}
