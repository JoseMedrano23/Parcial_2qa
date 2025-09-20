/**Afonso */
const InterfazOperacionesBasicas = require('../../src/interfaces/interfaz1');
const InterfazHistorial = require('../../src/interfaces/interfaz2');
const InterfazValidacionFormateo = require('../../src/interfaces/interfaz3');

describe('Integración: Sistema Completo de Calculadora', () => {
    let interfaz1, interfaz2, interfaz3;

    beforeEach(() => {
        interfaz1 = new InterfazOperacionesBasicas();
        interfaz2 = new InterfazHistorial();
        interfaz3 = new InterfazValidacionFormateo();
    });

    test('debe integrar todas las interfaces trabajando con datos compartidos', () => {
        // Interfaz 1: Operación básica
        const resultado1 = interfaz1.ejecutarOperacion('+', 15, 25);
        expect(resultado1).toBe(40);

        // Interfaz 2: Operación con historial
        const resultado2 = interfaz2.realizarCalculoYGuardar('multiplicacion', 8, 7);
        expect(resultado2).toBe(56);

        // Interfaz 3: Operación con validación y formateo
        const resultado3 = interfaz3.validarYCalcular('divide', '100', '5');
        expect(resultado3.valor).toBe(20);
        expect(resultado3.formateado).toBe('20.00');
        expect(resultado3.texto).toBe('Resultado: 20');
    });

    test('debe manejar errores de manera consistente entre interfaces', () => {
        // Error en Interfaz 1
        expect(() => interfaz1.ejecutarOperacion('/', 10, 0))
            .toThrow('No se puede dividir por cero');

        // Error en Interfaz 2
        expect(() => interfaz2.realizarCalculoYGuardar('division', 15, 0))
            .toThrow('No se puede dividir por cero');

        // Error en Interfaz 3
        expect(() => interfaz3.validarYCalcular('divide', '20', '0'))
            .toThrow('No se puede dividir por cero');
    });

    test('debe validar la compatibilidad de formatos entre interfaces', () => {
        // Interfaz 3 con validación estricta
        const resultadoValidado = interfaz3.validarYCalcular('add', '12.5', '7.3');
        expect(resultadoValidado.valor).toBe(19.8);

        // Verificar que el mismo cálculo funciona en otras interfaces
        const resultadoBasico = interfaz1.ejecutarOperacion('+', 12.5, 7.3);
        expect(resultadoBasico).toBeCloseTo(19.8);

        const resultadoHistorial = interfaz2.realizarCalculoYGuardar('suma', 12.5, 7.3);
        expect(resultadoHistorial).toBeCloseTo(19.8);
    });
});