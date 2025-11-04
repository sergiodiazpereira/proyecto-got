import Personaje from "../Personaje.js";
import Arma from "../Arma.js";

class Guerrero extends Personaje {
    #arma
    constructor(nombre, años, vivo = true, casa = null, arma = null) {
        super(nombre, años, vivo, casa);
        if (arma instanceof Arma) {
            this.#arma = arma;
            console.log(nombre + " ha equipado el arma " + this.#arma.getNombre());
        } else {
            console.log("No se le ha asignado el arma a " + this.getNombre() + " porque " + arma + " no es un arma");
            this.#arma = null;
        }
    }
    getArma(){
        return this.#arma;
    }
    setArma(arma){ /* Si arma no es una instancia de Arma, no se cambia */
        if (arma instanceof Arma) {
            this.#arma = arma;
            console.log(this.getNombre() + " ha equipado el arma " + this.#arma.getNombre());
        } else {
            console.log("No se le ha asignado el arma a " + this.getNombre() + " porque " + arma + " no es un arma");
        }
    }
    luchar(){
        console.log(this.getNombre() + " ataca con su " + this.#arma.getNombre() + " causando " + this.#arma.getDaño() + " puntos");
    }
    entrenar(){
        console.log("El guerrero " + this.getNombre() + " de arma " + this.#arma.getNombre() + " ha entrenado");
    }
}

export default Guerrero;