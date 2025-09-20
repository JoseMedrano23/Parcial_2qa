/**Fernando Archila**/
const Calculadora = require('../../src/calculadora');

describe('Calculadora - Pruebas Unitarias', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    describe('Operación Suma', () => {
        test('debe sumar dos números positivos correctamente', () => {
            const resultado = calculadora.sumar(5, 3);
            expect(resultado).toBe(8);
        });

        test('debe sumar números negativos correctamente', () => {
            const resultado = calculadora.sumar(-5, -3);
            expect(resultado).toBe(-8);
        });

        test('debe lanzar error con parámetros no numéricos', () => {
            expect(() => calculadora.sumar('5', 3)).toThrow('Los parámetros deben ser números');
        });
    });

    describe('Operación División', () => {
        test('debe dividir números correctamente', () => {
            const resultado = calculadora.dividir(10, 2);
            expect(resultado).toBe(5);
        });

        test('debe lanzar error al dividir por cero', () => {
            expect(() => calculadora.dividir(10, 0)).toThrow('No se puede dividir por cero');
        });
    });

    describe('Historial', () => {
        test('debe guardar las operaciones en el historial', () => {
            calculadora.sumar(2, 3);
            calculadora.restar(10, 4);
            
            const historial = calculadora.obtenerHistorial();
            expect(historial).toHaveLength(2);
            expect(historial[0]).toBe('2 + 3 = 5');
            expect(historial[1]).toBe('10 - 4 = 6');
        });
    });
});