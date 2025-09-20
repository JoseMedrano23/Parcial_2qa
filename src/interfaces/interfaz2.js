const Calculadora = require('./calculadora');

class InterfazHistorial {
    constructor() {
        this.calculadora = new Calculadora();
    }

    realizarCalculoYGuardar(operacion, a,) {
        let resultado;
        switch (operacion) {
            case 'suma':
                resultado = this.calculadora.sumar(a, b);
                break;
            case 'resta':
                resultado = this.calculadora.restar(a, b);
                break;
            case 'multiplicacion':
                resultado = this.calculadora.multiplicar(a, b);
                break;
            case 'division':
                resultado = this.calculadora.dividir(a, b);
                break;
            default:
                throw new Error('Operación no reconocida');
        }
        return resultado;
    }

    obtenerHistorialCompleto() {
        return this.calculadora.obtenerHistorial();
    }

    limpiarHistorial() {
        this.calculadora.limpiar();
    }

    contarOperaciones() {
        return this.calculadora.obtenerHistorial().length;
    }
}

module.exports = InterfazHistorial;