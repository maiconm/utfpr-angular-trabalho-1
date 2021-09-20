import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItensComponent } from './lista-itens.component';

describe('ListaItensComponent', () => {
  let component: ListaItensComponent;
  let fixture: ComponentFixture<ListaItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListaItensComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir o valor correto com o `selecionarItem()`', () => {
    spyOn(component.itemSelecionado, 'emit');
    component.itens = ['teste 1', 'teste 2'];
    component.selecionarItem(component.itens[0]);
    expect(component.itemSelecionado.emit).toHaveBeenCalledOnceWith('teste 1');
  });

});
