import Personaje from "./Personaje.js";

class Casa{
    #nombre;
    #lema;
    #miembros = [];
    constructor(nombre, lema, miembros = []){
        this.#nombre = nombre;
        this.#lema = lema;
        this.#miembros = [];
        if (Array.isArray(miembros)) {
            miembros.forEach(miembro => {
                if (miembro instanceof Personaje) {
                    this.#miembros.push(miembro);
                    miembro.setCasa(this);
                } else {
                    console.log(miembro + " no es un personaje asi que no se puede añadir" +
                                           " a los miembros de la casa " + this.#nombre
                    );                
                }                
            })
        } else {
            if (miembros instanceof Personaje) {
                this.#miembros.push(miembros);
                miembros.setCasa(this);
            } else {
                console.log(miembros + " no es un personaje asi que no se puede añadir" +
                                       " a los miembros de la casa " + this.#nombre
                );
            }
        }
    }
    getNombre(){
        return this.#nombre;
    }
    getLema(){
        return this.#lema;
    }
    getMiembros(){
        return this.#miembros;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }
    setLema(lema){
        this.#lema = lema;
    }
    setMiembros(miembros){
        this.#miembros = miembros;
    }
    añadirMiembros(miembros){ /* Si miembros es un array, se va elemento por elemento comprobando si son instancias de personajes, en cuyo caso se añaden al array miembros del objeto */
        if (Array.isArray(miembros)) {
            miembros.forEach(miembro => {
                if (miembro instanceof Personaje) {
                    this.#miembros.push(miembro);
                    if (miembro.getCasa() != this) miembro.setCasa(this);
                } else {
                    console.log(miembro + " no es un personaje asi que no se puede añadir" +
                                           " a los miembros de la casa " + this.#nombre
                    );                
                }                
            })
        } else {
            if (miembros instanceof Personaje) {
                this.#miembros.push(miembros);
                if (miembros.getCasa() != this) miembros.setCasa(this);
            } else {
                console.log(miembros + " no es un personaje asi que no se puede añadir" +
                                       " a los miembros de la casa " + this.#nombre
                );
            }
        }
    }
    mostrarMiembros(){
        console.log("--------- CASA '" + this.#nombre + "' --------------");
        this.#miembros.forEach(miembro => {
            miembro.presentacion();
        }) 
    }
}

export default Casa;