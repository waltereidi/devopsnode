// __tests__/calc.test.js

const calc = require('../src/calc');

describe('Funções de cálculo', () => {

  // ➕ Soma
  describe('somar', () => {
    it('deve somar dois números positivos', () => {
      expect(calc.somar(2, 3)).toBe(5);
    });

    it('deve somar números negativos', () => {
      expect(calc.somar(-2, -3)).toBe(-5);
    });

    it('deve somar número com zero', () => {
      expect(calc.somar(5, 0)).toBe(5);
    });
  });

  // ➖ Subtração
  describe('subtrair', () => {
    it('deve subtrair corretamente', () => {
      expect(calc.subtrair(10, 4)).toBe(6);
    });

    it('deve retornar negativo se necessário', () => {
      expect(calc.subtrair(4, 10)).toBe(-6);
    });
  });

  // ✖ Multiplicação
  describe('multiplicar', () => {
    it('deve multiplicar corretamente', () => {
      expect(calc.multiplicar(3, 4)).toBe(12);
    });

    it('deve retornar zero se um dos valores for zero', () => {
      expect(calc.multiplicar(5, 0)).toBe(0);
    });
  });

  // ➗ Divisão
  describe('dividir', () => {
    it('deve dividir corretamente', () => {
      expect(calc.dividir(10, 2)).toBe(5);
    });

    it('deve retornar número decimal se necessário', () => {
      expect(calc.dividir(7, 2)).toBe(3.5);
    });

    it('deve lançar erro ao dividir por zero', () => {
      expect(() => calc.dividir(10, 0)).toThrow(
        'Divisão por zero não é permitida'
      );
    });
  });

});