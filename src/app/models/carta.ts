import { Naipes } from '../enums/naipes';
import { Valores } from '../enums/valores';

export class Carta {

  constructor(
    /**
     * Valor da carta.
     */
    public valor?: Valores,
    /**
     * Naipe da carta.
     */
    public naipe?: Naipes,
  ) {
  }

}
