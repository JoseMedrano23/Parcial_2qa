/**@JoseMartinez**/
class Calculadora {
    constructor() {
        this.resultado = 0;
        this.historial = [];
    }

    sumar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Los parámetros deben ser números');
        }
        const resultado = a + b;
        this.historial.push(`${a} + ${b} = ${resultado}`);
        this.resultado = resultado;
        return resultado;
    }

    restar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Los parámetros deben ser números');
        }
        const resultado = a - b;
        this.historial.push(`${a} - ${b} = ${resultado}`);
        this.resultado = resultado;
        return resultado;
    }

    multiplicar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Los parámetros deben ser números');
        }
        const resultado = a * b;
        this.historial.push(`${a} * ${b} = ${resultado}`);
        this.resultado = resultado;
        return resultado;
    }

    dividir(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Los parámetros deben ser números');
        }
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        const resultado = a / b;
        this.historial.push(`${a} / ${b} = ${resultado}`);
        this.resultado = resultado;
        return resultado;
    }

    obtenerResultado() {
        return this.resultado;
    }

    obtenerHistorial() {
        return [...this.historial];
    }

    limpiar() {
        this.resultado = 0;
        this.historial = [];
    }
}

module.exports = Calculadora;