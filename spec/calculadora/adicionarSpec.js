describe('Sum tests', () => {
    let Calculadora = require('../../src/js/calculadora')

    it('Should return 5 for 2 and 3', () => {
        expect(Calculadora.adicionar(2, 3)).toEqual(5)
    });

    it('Should return 6 for 9 and -3 in text format', () => {
        expect(Calculadora.adicionar('9', '-3')).toEqual(6)
    });

    it('Should return 4.5 for 1.5 and 3', () => {
        expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5)
    });

    it('Should validate 0 when value 1 is not a number', () => {
        expect(Calculadora.adicionar(undefined, 10)).toEqual(0)
    })

    it('Should validate 0 when value 2 is not a number', () => {
        expect(Calculadora.adicionar(10, undefined)).toEqual(0)
    })
});