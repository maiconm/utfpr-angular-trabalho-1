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

  it('deve encontrar os elementos com valores iguais do objeto `Carta`', () => {
    component.carta.naipe = Naipes.copas;
    component.carta.valor = Valores.as;
    fixture.detectChanges();
    const elementoValor = fixture.debugElement.query(By.css('p')).nativeElement;
    const elementoNaipe = fixture.debugElement.query(By.css('p:nth-child(2)')).nativeElement;
    expect(elementoNaipe.textContent).toEqual(Naipes.copas);
    expect(elementoValor.textContent).toEqual(Valores.as);
  });

});
