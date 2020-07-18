import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let fileterText = args[0];
    let filterField = args[1];
    if(!fileterText || fileterText === 'allproject'){
      return value;
    }
    console.log(fileterText)
    if(value && value.length > 0){
        return value.filter(elem=>{
          console.log(elem[filterField])
          return elem[filterField] === fileterText
        })
    }
    return value;
  }

}
