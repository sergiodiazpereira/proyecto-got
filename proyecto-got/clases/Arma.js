let tipos = ["espada", "daga", "arco"]; /* Si se quiere un nuevo tipo de arma, se tendra que añadir aquí */

class Arma{
    #nombre;
    #daño;
    #tipo;
    constructor(nombre, daño, tipo){
        this.#nombre = nombre;
        this.#daño = daño;
        if (tipos.includes(tipo)) {
            this.#tipo = tipo;
        }
        else {
            this.#tipo = "indefinido";
            console.log("no se ha podido añadir el tipo " + tipo + " al arma " + nombre + " porque no es un tipo válido");
        }
    }

    getNombre(){
        return this.#nombre;
    }
    getDaño(){
        return this.#daño;
    }
    getTipo(){
        return this.#tipo;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }
    setDaño(daño){
        this.#daño = daño;
    }
    setTipo(tipo){ /* Si el tipo no está en el array "tipos", no se cambia */
        if (tipos.includes(tipo)) {
            this.#tipo = tipo;
        }
        else {
            this.#tipo = "indefinido";
            console.log(tipo + " no se considera un tipo de arma");
        }
    }
    descripcion(){
        console.log("El arma de nombre " + this.#nombre + " hace " + this.#daño + 
               " de daño y es un/a " + this.#tipo);
    }
}

export default Arma;