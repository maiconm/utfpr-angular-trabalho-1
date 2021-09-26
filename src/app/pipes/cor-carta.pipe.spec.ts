import { Naipes } from '../enums/naipes';
import { CorCartaPipe } from './cor-carta.pipe';

describe('CorCartaPipe', () => {

  let pipe: CorCartaPipe;

  beforeEach(() => {
    pipe = new CorCartaPipe();
  })

  it('create an instance', () => {
    const pipe = new CorCartaPipe();
    expect(pipe).toBeTruthy();
  });

  describe('trasform', () => {

    it('deve retornar `preto` para naipes pretos', () => {
      expect(pipe.transform(Naipes.espadas)).toBe('preto');
      expect(pipe.transform(Naipes.paus)).toBe('preto');
    });

    it('deve retornar `vermelho` para naipes vermelhos', () => {
      expect(pipe.transform(Naipes.ouros)).toBe('vermelho');
      expect(pipe.transform(Naipes.copas)).toBe('vermelho');
    });

    it('deve retornar `preto` caso não seja passado valor', () => {
      expect(pipe.transform()).toBe('preto');
    });

  });

  describe('tranform com classes customizadas', () => {

    it('deve manter classes default para configuração vazia', () => {
      const confs = {};
      expect(pipe.transform(Naipes.copas, confs)).toBe('vermelho');
      expect(pipe.transform(Naipes.espadas, confs)).toBe('preto');
      expect(pipe.transform(undefined, confs)).toBe('preto');
    });

    it('deve manter apenas as classes default que não sejam sobrescritas', () => {
      let confs = { classeNaipesVermelhos: 'verde' };
      expect(pipe.transform(Naipes.copas, confs)).toBe('verde');
      expect(pipe.transform(Naipes.espadas, confs)).toBe('preto');
      expect(pipe.transform(undefined, confs)).toBe('preto');
    });

    it('deve trocar todas as classes quando especificado', () => {
      let confs = {
        classeNaipesVermelhos: 'verde',
        classeNaipesPretos: 'azul',
      };
      expect(pipe.transform(Naipes.copas, confs)).toBe('verde');
      expect(pipe.transform(Naipes.espadas, confs)).toBe('azul');
      expect(pipe.transform(undefined, confs)).toBe('azul');
    });

  });

});
