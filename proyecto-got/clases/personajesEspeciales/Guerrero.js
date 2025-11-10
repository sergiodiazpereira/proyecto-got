import Personaje from "../Personaje.js";
import Arma from "../Arma.js";

class Guerrero extends Personaje {
    #arma
    #vida = 100;
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
    getVida(){
        return this.#vida;
    }
    setVida(vida){
        if (isNaN(vida)) {
            console.log(vida + " no es un numero");
        } else if (vida <= 0){
            this.matar();
            this.#vida = 0;
        } else if (vida > 0){
            this.#vida = vida;
        }
    }
    recibirDaño(puntos){
        if (isNaN(puntos)) {
            console.log(this.getNombre() + " no puede recibir puntos de daño porque " + puntos + " no es un numero");
        } else {
            this.setVida(this.#vida - puntos);
        }
    }
    atacar(objetivo){
        if (objetivo instanceof Guerrero) {
            let daño = Math.floor(this.#arma.getDaño() * (0.7 + Math.random() * 0.6)); // Entre 70% y 130% del daño base
            console.log(this.getNombre() + " ataca a " + objetivo.getNombre() + " causando " + daño + " puntos de daño");
            objetivo.recibirDaño(daño);
        } else {
            console.log(this.getNombre() + " no puede atacar a " + objetivo + " porque este no es un guerrero");
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