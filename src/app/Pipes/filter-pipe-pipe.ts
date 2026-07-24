import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure:false
})
export class FilterPipePipe implements PipeTransform {
  transform(arr: any, property:string,word:string): any {
    if(arr.length===0)return arr;
  let  matches=[];
  for(const item of arr){
    if(item[property]===word){
      matches.push(item);
    }
  }
  return matches;
  }
}
