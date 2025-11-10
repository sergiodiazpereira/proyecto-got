import Casa  from "./Casa.js";
import Guerrero from "./personajesEspeciales/Guerrero.js";
class Batalla{
    #muertosb1 = [];
    #muertosb2 = [];
    constructor(){

    }
    iniciarBatalla(bando1, bando2){
        if (bando1 instanceof Casa && bando2 instanceof Casa) {
            let guerrerosb1, guerrerosb2;
            guerrerosb1 = bando1.getMiembros().filter(miembro => miembro instanceof Guerrero && miembro.getVivo() == true);
            console.log("Los guerreros que pelearán de la casa " + bando1.getNombre() + " serán los siguientes: ");
            guerrerosb1.forEach(guerrerob1 => {
                console.log(guerrerob1.getNombre());
            });
            guerrerosb2 = bando2.getMiembros().filter(miembro => miembro instanceof Guerrero && miembro.getVivo() == true);
            console.log("Los guerreros que pelearán de la casa " + bando2.getNombre() + " serán los siguientes: ");
            guerrerosb2.forEach(guerrerob2 => {
                console.log(guerrerob2.getNombre());
            });
            do {
                guerrerosb1.forEach(guerrerob1 => {
                    guerrerosb2.forEach(guerrerob2 => {
                        if (guerrerob1.getVida() > 0 && guerrerob2.getVida() > 0) {
                            while (guerrerob2.getVida() > 0 && guerrerob1.getVida() > 0) {
                                console.log("----- NUEVO ENFRENTAMIENTO (" + guerrerob1.getNombre() + " vs " + guerrerob2.getNombre() + ") -----");
                                guerrerob1.atacar(guerrerob2);
                                if (guerrerob2.getVivo() == true) {
                                    guerrerob2.atacar(guerrerob1);
                                } else {
                                    this.#muertosb2.push(guerrerob2);
                                }
                                if (guerrerob1.getVivo() == false && !this.#muertosb1.includes(guerrerob1)) this.#muertosb1.push(guerrerob1);
                                console.log(guerrerob1.getNombre() + ": " + guerrerob1.getVida() + " | " + guerrerob2.getNombre() + ": " + guerrerob2.getVida());
                            }
                        }
                    });
                });
            }while (guerrerosb1.length != this.#muertosb1.length && guerrerosb2.length != this.#muertosb2.length);
            if (guerrerosb1.length == this.#muertosb1.length){
                console.log("Ha ganado la casa " + bando2.getNombre());
            } else {
                console.log("Ha ganado la casa " + bando1.getNombre());
            }
        } else if (bando1 instanceof Guerrero && bando2 instanceof Guerrero) {
            if (bando1.getVida() > 0 && bando2.getVida() > 0) {
                while (bando2.getVida() > 0 && bando1.getVida() > 0) {
                    console.log("----- NUEVO ENFRENTAMIENTO (" + bando1.getNombre() + " vs " + bando2.getNombre() + ") -----");
                    bando1.atacar(bando2);
                    if (bando2.getVivo() == true) {
                        bando2.atacar(bando1);
                    } else {
                        this.#muertosb2.push(bando2);
                    }
                    if (bando1.getVivo() == false && !this.#muertosb1.includes(bando1)) this.#muertosb1.push(bando1);
                    console.log(bando1.getNombre() + ": " + bando1.getVida() + " | " + bando2.getNombre() + ": " + bando2.getVida());
                }
            }
            if (bando1.getVida() > 0) {
                console.log(bando1.getNombre() + " ha ganado el enfrentamiento");
            } else {
                console.log(bando2.getNombre() + " ha ganado el enfrentamiento");
            }
        } else {
            console.log("No se ha podido iniciar la batalla porque " + bando1 + " y " + bando2 + " no son ni guerreros ni casas");
        }
    }
    mostrarGuerrerosMuertosEnBatalla(){
        console.log("--- MUERTOS DEL BANDO 1 ---");
        this.#muertosb1.forEach(muerto => {
            console.log(muerto.getNombre());
        })
        console.log("--- MUERTOS DEL BANDO 2 ---");
        this.#muertosb2.forEach(muerto => {
            console.log(muerto.getNombre());
        })
    }
}
export default Batalla;