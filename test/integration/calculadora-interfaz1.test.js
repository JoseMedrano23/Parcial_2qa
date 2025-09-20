/**Alfonso */
const InterfazOperacionesBasicas = require('../../src/interfaz1');
const Calculadora = require('../../src/calculadora');

describe('Integración: Calculadora con InterfazOperacionesBasicas', () => {
    let interfaz;

    beforeEach(() => {
        interfaz = new InterfazOperacionesBasicas();
    });

    test('debe integrar correctamente operaciones básicas con historial', () => {
        // Ejecutar múltiples operaciones
        interfaz.ejecutarOperacion('+', 10, 5);
        interfaz.ejecutarOperacion('-', 20, 8);
        interfaz.ejecutarOperacion('*', 3, 7);

        // Verificar que el último resultado es correcto
        const ultimoResultado = interfaz.obtenerUltimoResultado();
        expect(ultimoResultado).toBe(21);

        // Verificar que el historial se mantuvo
        const historial = interfaz.calculadora.obtenerHistorial();
        expect(historial).toHaveLength(3);
        expect(historial[2]).toBe('3 * 7 = 21');
    });

    test('debe manejar errores de división por cero en la integración', () => {
        // Primera operación exitosa
        interfaz.ejecutarOperacion('+', 5, 5);
        expect(interfaz.obtenerUltimoResultado()).toBe(10);

        // Segunda operación con error
        expect(() => interfaz.ejecutarOperacion('/', 10, 0))
            .toThrow('No se puede dividir por cero');
    });
});