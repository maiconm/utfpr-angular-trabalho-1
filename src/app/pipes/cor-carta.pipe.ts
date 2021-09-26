import { Pipe, PipeTransform } from '@angular/core';
import { Naipes } from '../enums/naipes';

@Pipe({
  name: 'corCarta'
})
export class CorCartaPipe implements PipeTransform {

  transform(
    naipe?: Naipes,
    confs?: {
      classeNaipesVermelhos?: (string | null),
      classeNaipesPretos?: (string | null),
    }
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
