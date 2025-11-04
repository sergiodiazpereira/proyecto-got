import Casa from "./clases/Casa.js";
import Reino from "./clases/Reino.js";
import Personaje from "./clases/Personaje.js";
import Arma from "./clases/Arma.js";
import Guerrero from "./clases/personajesEspeciales/Guerrero.js";
import Consejero from "./clases/personajesEspeciales/Consejero.js";
import Rey from "./clases/personajesEspeciales/Rey.js";

let $casa1 = new Casa("Stark", "Los starks");
let $casa2 = new Casa("Lannister", "Los lannisters");
let $casas = [$casa1, $casa2];
let $reino1 = new Reino("Poniente", $casas);
let $arma1 = new Arma("Garra", 54, "espada");
let $arma2 = new Arma("Aguja", 26, "espada");
let $personaje1 = new Guerrero("Jon Snow", 25, true, $casa1);
let $personaje2 = new Guerrero("Arya Stark", 19, true, $casa1);
$personaje1.setArma($arma1);
$personaje2.setArma($arma2);
let $personaje3 = new Rey("Jamie Lannister", 32, true, $casa2, 10);
$reino1.setRey($personaje3);
console.log("Casas del reino de " + $reino1.getNombre() + ": ");
$reino1.getCasas().forEach(casa => {
    console.log("- " + casa.getNombre());
});
console.log("Rey actual: ");
console.log("El rey actual es " + $personaje3.getNombre() + " de la casa " + $personaje3.getCasa().getNombre());
console.log("Miembros de la casa " + $casa1.getNombre() + ": ");
$casa1.getMiembros().forEach(miembro => {
    console.log("- " + miembro.getNombre());
});
console.log("Presentaciones:");
$personaje1.presentacion();
$personaje2.presentacion();
$personaje3.presentacion();
console.log("Armas:");
$arma1.descripcion();
$arma2.descripcion();