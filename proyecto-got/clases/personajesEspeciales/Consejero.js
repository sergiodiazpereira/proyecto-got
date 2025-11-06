import Personaje from "../Personaje.js";
import Reino from "../Reino.js";
import Casa from "../Casa.js";

class Consejero extends Personaje {
    #especialidad;
    constructor(nombre, años, vivo = true, casa = null, especialidad = null){
        super(nombre, años, vivo, casa);
        this.#especialidad = especialidad;
    }
    getEspecialidad(){
        return this.#especialidad;
    }  
    setEspecialidad(especialidad){
        this.#especialidad = especialidad;
    }
    luchar(){
        console.log(this.getNombre() + " no lucha con armas, sino con palabras e inteligencia");
    }
    aconsejar(){
        console.log("El consejero " + this.getNombre() + " aconseja a " + this.getCasa().getReino().getRey().getNombre() + " sobre " + this.#especialidad);
    }
}

export default Consejero;