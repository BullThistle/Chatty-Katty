import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(value: string) {
    value = value.replace(/[?]/, '%3f');
    value = value.replace(/[=]/, '%3d');
    value = value.replace(/[&]/, '%26');
    return value;
  }

}
