import { Component, Input, } from '@angular/core';
import { Carta } from 'src/app/models/carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {

  /**
   * Objeto carta com naipe e valor escolhido.
   */
  @Input()
  public carta = new Carta();

}
