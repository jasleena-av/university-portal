import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefilter'
})
export class PipefilterPipe implements PipeTransform {

  transform(): unknown {
    return null;
  }

}
