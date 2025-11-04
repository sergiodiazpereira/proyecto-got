import Casa from "./Casa.js";

class Personaje{
    #nombre;
    #años;
    #vivo;
    #casa;
    constructor(nombre, años, vivo = true, casa = null){
        this.#nombre = nombre;
        this.#años = años;
        if (vivo == true || vivo == false) {
            this.#vivo = vivo;
        } else {
            this.#vivo = true;
        }
        if (casa instanceof Casa) {
            this.#casa = casa;
            console.log(this.#nombre + " ha sido añadido a la casa " + casa.getNombre());
            casa.añadirMiembros(this);
        } else {
            this.#casa = null;
            console.log("No se ha podido asignar una casa a " + this.#nombre + " porque " + casa + " no es una casa");
        }
    }
    getNombre(){
        return this.#nombre;
    }
    getAños(){
        return this.#años;
    }
    getVivo(){
        return this.#vivo;
    }
    getCasa(){
        return this.#casa;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }
    setAños(años){
        this.#años = años;
    }
    setVivo(vivo){
        if (vivo == true || vivo == false) {
            this.#vivo = vivo;
        } else {
            console.log("No se ha podido cambiar el estado 'vivo' del personaje " + this.#nombre);
        }   
    }
    setCasa(casa){ /* Si casa no es una instancia de Casa, no se cambia */
        if (casa instanceof Casa) {
            this.#casa = casa;
            console.log(this.#nombre + " ha sido añadido a la casa " + casa.getNombre());
            casa.añadirMiembros(this);
        } else {
            console.log("No se ha podido cambiar la casa a " + this.#nombre + " porque " + casa + " no es una casa");
        }        
    }
    presentacion(){
        console.log("Soy " + this.#nombre + " de la " + this.#casa.getNombre());
    }
    matar(){
        this.#vivo = false;
    }
}

export default Personaje;