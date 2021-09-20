import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent {

  /**
   * Itens a ser mostrado.
   */
  @Input()
  public itens = <string[]>[];

  /**
   * Item selecionado.
   */
  @Output()
  public itemSelecionado = new EventEmitter<string>();

  /**
   * Emite o item selecionado.
   * @param item Item.
   */
  public selecionarItem(item: string): void {
    this.itemSelecionado.emit(item);
  }
}
