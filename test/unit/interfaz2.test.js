/**Fernando Archila**/
const InterfazHistorial = require('../../src/interfaz2');

describe('InterfazHistorial - Pruebas Unitarias', () => {
    let interfaz;

    beforeEach(() => {
        interfaz = new InterfazHistorial();
    });

    test('debe realizar cálculo y guardarlo en historial', () => {
        const resultado = interfaz.realizarCalculoYGuardar('suma', 8, 2);
        expect(resultado).toBe(10);
        
        const historial = interfaz.obtenerHistorialCompleto();
        expect(historial).toHaveLength(1);
    });

    test('debe contar las operaciones correctamente', () => {
        interfaz.realizarCalculoYGuardar('suma', 1, 1);
        interfaz.realizarCalculoYGuardar('resta', 5, 2);
        
        const contador = interfaz.contarOperaciones();
        expect(contador).toBe(2);
    });

    test('debe limpiar el historial correctamente', () => {
        interfaz.realizarCalculoYGuardar('multiplicacion', 3, 4);
        interfaz.limpiarHistorial();
        
        const contador = interfaz.contarOperaciones();
        expect(contador).toBe(0);
    });
});