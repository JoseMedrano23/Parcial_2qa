const Calculadora = require('./calculadora');

class InterfazOperacionesBasicas {
    constructor() {
        this.calculadora = new Calculadora();
    }

    ejecutarOperacion(operacion, a, b) {
        switch (operacion) {
            case '+':
                return this.calculadora.sumar(a, b);
            case '-':
                return this.calculadora.restar(a, b);
            case '*':
                return this.calculadora.multiplicar(a, b);
            case '/':
                return this.calculadora.dividir(a, b);
            default:
                throw new Error('Operación no válida');
        }
    }

    obtenerUltimoResultado() {
        return this.calculadora.obtenerResultado();
    }
}

module.exports = InterfazOperacionesBasicas;