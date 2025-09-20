/**Fernando Archila**/
const InterfazOperacionesBasicas = require('../../src/interfaz1');

describe('InterfazOperacionesBasicas - Pruebas Unitarias', () => {
    let interfaz;

    beforeEach(() => {
        interfaz = new InterfazOperacionesBasicas();
    });

    test('debe ejecutar suma correctamente', () => {
        const resultado = interfaz.ejecutarOperacion('+', 7, 3);
        expect(resultado).toBe(10);
    });

    test('debe ejecutar multiplicación correctamente', () => {
        const resultado = interfaz.ejecutarOperacion('*', 4, 5);
        expect(resultado).toBe(20);
    });

    test('debe lanzar error con operación inválida', () => {
        expect(() => interfaz.ejecutarOperacion('%', 5, 2)).toThrow('Operación no válida');
    });

    test('debe obtener el último resultado', () => {
        interfaz.ejecutarOperacion('+', 10, 5);
        const ultimoResultado = interfaz.obtenerUltimoResultado();
        expect(ultimoResultado).toBe(15);
    });
});