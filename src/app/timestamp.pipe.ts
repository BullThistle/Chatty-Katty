import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(value, order) {
    if (value == null){
      return [];
    }
    if (order == "descending") {
      return value.sort(function(a, b){
        return b.timestamp - a.timestamp;
      });
    } else if (order == "ascending"){
      return value.sort(function(a, b){
        return a.timestamp - b.timestamp;
      });
    }
  }
}
