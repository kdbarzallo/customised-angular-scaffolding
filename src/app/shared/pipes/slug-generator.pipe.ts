import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})
export class SlugGeneratorPipe implements PipeTransform {

  transform(value: string): string {

    return value.trim()
                .replace(/\s+/g, '-')
                .toLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")
                .replace(/[*+~.()'"!:@]/g, "");
  }

}
