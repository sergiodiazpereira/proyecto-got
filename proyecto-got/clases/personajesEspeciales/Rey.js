import Personaje from "../Personaje.js";

class Rey extends Personaje{
    #añosReinado;
    constructor(nombre, años, vivo = true, casa = null, añosReinado = null){
        super(nombre, años, vivo, casa);
        if (isNaN(añosReinado)) {
            console.log("Los años de reinado no se pudieron añadir a " + this.getNombre() + " porque no son un numero");
            this.#añosReinado = null;
        } else {
            this.#añosReinado = añosReinado;
        }
    }
    getAñosReinado(){
        return this.#añosReinado;
    }
    setAñosReinado(añosReinado){ /* Si añosReinado no es un numero, no se añade */
        if (isNaN(añosReinado)) {
            console.log("Los años de reinado no se pudieron añadir a " + this.getNombre() + " porque no son un numero");
        } else {
            this.#añosReinado = añosReinado;
        }
    }
    luchar(){
        console.log("El rey " + this.getNombre() + " es demasiado noble para luchar");
    }
    gobernar(){
        console.log("El rey " + this.getNombre() + " gobierna con sabiduría desde hace " + this.#añosReinado + " años");
    }
}

export default Rey;