import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { Naipes } from './enums/naipes';
import { Valores } from './enums/valores';
import { Carta } from './models/carta';

@Component({
  selector: 'app-lista-itens',
  template: ``,
  styles: [],
})
class ListaItensComponentMock{
  @Input()
  public itens = [];
  @Output()
  public itemSelecionado = new EventEmitter<string>();
}

@Component({
  selector: 'app-carta',
  template: ``,
  styles: [],
})
class CartaComponentMock{
  @Input()
  public carta = new Carta();
}

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        ListaItensComponentMock,
        CartaComponentMock,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('ao iniciar, `carta` não pode ter valor nem naipe', () => {
    expect(component.carta.valor).toBeFalsy();
    expect(component.carta.naipe).toBeFalsy();
  });

  it('`carta` deve receber o naipe e valor escolhido', () => {
    component.selecionarNaipe(component.naipes[3]);
    component.selecionarValor(component.valores[3]);
    expect(component.carta.naipe).toBe(Naipes.espadas);
    expect(component.carta.valor).toBe(Valores.quatro);
  });

});
