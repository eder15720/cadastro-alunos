import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  transform(aluno:any): number{
    return (aluno.nota1 + aluno.nota2) / 2;
  }

}
