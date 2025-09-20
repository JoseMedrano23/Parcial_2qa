/**Alfonso */
const InterfazHistorial = require('../../src/interfaces/interfaz2');

describe('Integración: Calculadora con InterfazHistorial', () => {
    let interfazHistorial;

    beforeEach(() => {
        interfazHistorial = new InterfazHistorial();
    });

    test('debe integrar gestión completa de historial con cálculos', () => {
        // Realizar varias operaciones
        interfazHistorial.realizarCalculoYGuardar('suma', 15, 25);
        interfazHistorial.realizarCalculoYGuardar('division', 100, 4);
        interfazHistorial.realizarCalculoYGuardar('multiplicacion', 6, 8);

        // Verificar integración del historial
        const historial = interfazHistorial.obtenerHistorialCompleto();
        expect(historial).toHaveLength(3);
        expect(historial[0]).toContain('15 + 25 = 40');
        expect(historial[1]).toContain('100 / 4 = 25');
        expect(historial[2]).toContain('6 * 8 = 48');

        // Verificar conteo
        expect(interfazHistorial.contarOperaciones()).toBe(3);
    });

    test('debe integrar limpieza de historial con nuevos cálculos', () => {
        // Operaciones iniciales
        interfazHistorial.realizarCalculoYGuardar('resta', 50, 30);
        expect(interfazHistorial.contarOperaciones()).toBe(1);

        // Limpiar
        interfazHistorial.limpiarHistorial();
        expect(interfazHistorial.contarOperaciones()).toBe(0);

        // Nuevas operaciones después de limpiar
        interfazHistorial.realizarCalculoYGuardar('suma', 2, 3);
        const historial = interfazHistorial.obtenerHistorialCompleto();
        expect(historial).toHaveLength(1);
        expect(historial[0]).toBe('2 + 3 = 5');
    });
});