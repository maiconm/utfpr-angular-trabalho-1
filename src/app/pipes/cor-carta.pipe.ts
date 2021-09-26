import { Pipe, PipeTransform } from '@angular/core';
import { Naipes } from '../enums/naipes';
import { IConfsCorCartaPipe } from '../interfaces/confs-cor-carta-pipe';

@Pipe({
  name: 'corCarta'
})
export class CorCartaPipe implements PipeTransform {

  transform(
    naipe?: Naipes,
    confs?: IConfsCorCartaPipe,
  ): string {
    if (naipe && this.isNaipeVermelho(naipe)) {
      return confs?.classeNaipesVermelhos ?? 'vermelho';
    }
    return confs?.classeNaipesPretos ?? 'preto';
  }

  private isNaipeVermelho(naipe: Naipes): boolean {
    return (naipe === Naipes.copas || naipe === Naipes.ouros);
  }

}
