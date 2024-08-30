import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatofecha'
})
export class FormatofechaPipe implements PipeTransform {

  transform(fecha: Date): string {
    let resultado: string;
    resultado = fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
    // resultado = 'fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
    return resultado;
  }

}
