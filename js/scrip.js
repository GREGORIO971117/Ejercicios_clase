
/*
 *
 * PT 1.- Arreglos*/


let colores = ["azul","rojo","verde","amarillo"];

const perros =(a,b) => (a>b) ? "el perro a es mas grande que el b":  "el perro b es mas grande que el a";

let paises = [];

paises[0]="Mexico si Mexico a huevo cabron";
paises[1]="Colombia, si drogas cocaina hariana todo eso";


let generosMusicales= new Array("rock","pop","indie");

let numerosPares=new Array(2,4,6,8,10);

console.log(colores);
console.log(paises);
console.log(generosMusicales);

colores.push("caca asi es color caca");
console.log(colores);

colores.unshift("chorrillo asi es dije chorrillo");
console.log(colores);

colores.pop();
console.log(colores);

colores.shift();
console.log();

console.log(numerosPares.map(e=>e+1));

numerosPares.forEach(function (e) {
    console.log(`numero ganador ${e}`);
})

console.log(numerosPares.at(3));

console.log(numerosPares.slice(2));

console.log(numerosPares.reverse());




