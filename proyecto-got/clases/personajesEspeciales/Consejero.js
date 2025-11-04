import Personaje from "../Personaje.js";

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
        console.log("El consejero " + this.getNombre() + " te puede aconsejar sobre " + this.#especialidad);
    }
}

export default Consejero;