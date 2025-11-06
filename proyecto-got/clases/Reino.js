import Rey from "./personajesEspeciales/Rey.js";
import Casa from "./Casa.js";

class Reino{
    #nombre;
    #casas = [];
    #rey;
    constructor(nombre, casas = [], rey = null){
        this.#nombre = nombre;
        if (Array.isArray(casas)) {
            casas.forEach(casa => {
                if (casa instanceof Casa) {
                    this.#casas.push(casa);
                    casa.setReino(this);
                    console.log("La casa " + casa.getNombre() + " ha sido añadida al reino de " + this.#nombre);
                } else {
                    console.log(casa + " no es una casa asi que no se puede añadir" +
                                           " a las casas del reino " + this.#nombre
                    );                        
                }
            });
        } else {
            if (casas instanceof Casa) {
                this.#casas.push(casas);
                casas.setReino(this);
                console.log("La casa " + casas.getNombre() + " ha sido añadida al reino de " + this.#nombre);
            } else {
                console.log(casas + " no es una casa asi que no se puede añadir" +
                                   " a las casas del reino " + this.#nombre
                );                  
            }
        }
        if (rey instanceof Rey) {
            this.#rey = rey;
            console.log(rey.getNombre() + " ha sido proclamado rey de " + this.#nombre);
        } else {
            this.#rey = null;
            console.log(rey + " no es un rey asi que no se puede añadir" +
                               " al reinado de " + this.#nombre
            );               
        }
    }
    getNombre(){
        return this.#nombre;
    }
    getCasas(){
        return this.#casas;
    }
    getRey(){
        return this.#rey;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }
    añadirCasas(casas){ /* Si casas es un array, se va elemento por elemento comprobando si son instancias de casas, en cuyo caso se añaden al array casas del objeto */
        if (Array.isArray(casas)) {
            casas.forEach(casa => {
                if (casa instanceof Casa) {
                    this.#casas.push(casa);
                    casa.setReino(this);
                    console.log("La casa " + casa.getNombre() + " ha sido añadida al reino de " + this.#nombre);
                } else {
                    console.log(casa + " no es una casa asi que no se puede añadir" +
                                           " a las casas del reino " + this.#nombre
                    );                        
                }
            });
        } else {
            if (casas instanceof Casa) {
                this.#casas.push(casas);
                casas.setReino(this);
                console.log("La casa " + casas.getNombre() + " ha sido añadida al reino de " + this.#nombre);
            } else {
                console.log(casa + " no es una casa asi que no se puede añadir" +
                                   " a las casas del reino " + this.#nombre
                );                  
            }
        }   
    }
    setRey(rey){ /* Si rey no es una instancia de Rey, no se cambia */
        if (rey instanceof Rey) {
            this.#rey = rey;
            console.log(rey.getNombre() + " ha sido proclamado rey de " + this.#nombre);
        } else {
            console.log(casa + " no es un rey asi que no se puede añadir" +
                               " al reinado de " + this.#nombre
            );               
        }
    }
}

export default Reino;