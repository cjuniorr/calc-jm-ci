describe('Subtraction  tests', () => {
    let Calculadora = require('../../src/js/calculadora')

    it('Should return 5 for 2 and 3', () => {
        expect(Calculadora.subtrair(8, 3)).toEqual(5)
    });

    it('Should return 6 for 9 and -3 in text format', () => {
        expect(Calculadora.subtrair('8', '3')).toEqual(5)
    });

    it('Should return 4 for 5.5 and 1.5', () => {
        expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4)
        expect(Calculadora.subtrair('5.5', '1.5')).toEqual(4)
    });

    it('Should validate 0 when value 1 is not a number', () => {
        expect(Calculadora.subtrair(undefined, 5)).toEqual(0)
    })

    it('Should validate 0 when value 2 is not a number', () => {
        expect(Calculadora.subtrair(10, undefined)).toEqual(0)
    })
});