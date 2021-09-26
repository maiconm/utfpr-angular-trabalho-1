import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartaComponent } from './carta.component';

describe('CartaComponent', () => {
  let component: CartaComponent;
  let fixture: ComponentFixture<CartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaComponent ]
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
    component.carta.naipe = 'x';
    component.carta.valor = 'y';
    fixture.detectChanges();
    const elementoValor = fixture.debugElement.query(By.css('p')).nativeElement;
    const elementoNaipe = fixture.debugElement.query(By.css('p:nth-child(2)')).nativeElement;
    expect(elementoNaipe.textContent).toEqual('x');
    expect(elementoValor.textContent).toEqual('y');
  });

});
