import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Naipes } from 'src/app/enums/naipes';
import { Valores } from 'src/app/enums/valores';
import { Carta } from 'src/app/models/carta';
import { CorCartaPipe } from 'src/app/pipes/cor-carta.pipe';

import { CartaComponent } from './carta.component';

describe('CartaComponent', () => {
  let component: CartaComponent;
  let fixture: ComponentFixture<CartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartaComponent,
        CorCartaPipe,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ao iniciar, `carta` não pode ter valor nem naipe', () => {
    expect(component.carta.valor).toBeFalsy();
    expect(component.carta.naipe).toBeFalsy();
  });

  it('deve encontrar os elementos com valores iguais do objeto `Carta`', () => {
    component.carta = new Carta(
      Valores.as,
      Naipes.copas,
    );
    fixture.detectChanges();
    const elementoValor = fixture.debugElement.query(By.css('div>p')).nativeElement;
    const elementoNaipe = fixture.debugElement.query(By.css('.naipe-container>p')).nativeElement;
    expect(elementoNaipe.textContent).toEqual(Naipes.copas);
    expect(elementoValor.textContent).toEqual(Valores.as);
  });

  it('a primeira `div` deve estar com classe `vermelha` ao selecionar um naipe correpondente ao vermelho', () => {
    component.carta.naipe = Naipes.copas;
    fixture.detectChanges();
    const divComClasseVermelho = fixture.debugElement.query(By.css('.vermelho')).nativeElement;
    expect(divComClasseVermelho).toBeTruthy();
  });

});
