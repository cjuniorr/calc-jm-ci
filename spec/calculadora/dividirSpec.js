describe('Division  tests', () => {
    let Calculadora = require('../../src/js/calculadora')

    it('Should return 2 for 6 and 3', () => {
        expect(Calculadora.dividir(6, 3)).toEqual(2)
    });

    it('Should return 2 for 6 and 3 in text format', () => {
        expect(Calculadora.dividir('6', '3')).toEqual(2)
    });

    it('Should return 1.5 for 4.5 and 3', () => {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5)
        expect(Calculadora.dividir('4.5', '3')).toEqual(1.5)
    });

    it('Should validate "Erro" when divide by zero', () => {
        expect(Calculadora.dividir(5, 0)).toEqual('Erro')
    })

      it('Should validate 0 when value 2 is not a number', () => {
        expect(Calculadora.dividir(10, undefined)).toEqual(0)
    })

    it('Should validate 0 when value 2 is not a number', () => {
        expect(Calculadora.dividir(10, undefined)).toEqual(0)
    })
});