import { Component } from '@angular/core';
import { Naipes } from './enums/naipes';
import { Valores } from './enums/valores';
import { Carta } from './models/carta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * Valores das cartas.
   */
  public valores = Object.values(Valores);
  /**
   * Naipes das cartas.
   */
  public naipes = Object.values(Naipes);
  /**
   * Objeto carta com os valores e napes selecionados.
   */
  public carta = new Carta();
  /**
   * Seleciona valor da carta.
   * @param valor Valor.
   */
  public selecionarValor(valor: string): void {
    this.carta.valor = <Valores>valor;
  }
  /**
   * Seleciona o naipe da carta.
   * @param naipe Naipe.
   */
  public selecionarNaipe(naipe: string): void {
    this.carta.naipe = <Naipes>naipe;
  }

}
