describe('Multiplication tests', () => {
    let Calculadora = require('../../src/js/calculadora')

    it('Should return 6 for 2 and 3', () => {
        expect(Calculadora.multiplicar(2, 3)).toEqual(6)
    });

    it('Should return 6 for 2 and 3 in text format', () => {
        expect(Calculadora.multiplicar('2', '3')).toEqual(6)
    });

    it('Should return 4.5 for 1.5 and 3', () => {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5)
        expect(Calculadora.multiplicar('1.5', '3')).toEqual(4.5)
    });

    // it('Should validate "Erro" when divide by zero', () => {
    //     expect(Calculadora.multiplicar(5, 0)).toEqual('Erro')
    // })

      it('Should validate 0 when value 1 is not a number', () => {
        expect(Calculadora.multiplicar(undefined, 4)).toEqual(0)
    })

    it('Should validate 0 when value 2 is not a number', () => {
        expect(Calculadora.multiplicar(4, undefined)).toEqual(0)
    })
});