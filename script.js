let colores=["rojo","verde","azul","amarillo","rosa"];


for (let index=0; index < colores.length; index++) {

   console.log(`imprime el valor de index: ${index}`);
   console.log(colores[index]);

}
let cont=0;
while (cont<colores.length) {

    console.log(colores[cont]);
    cont++;
    
}

let cont_1=0;

while (cont_1<colores.length) {

    console.log(colores[cont_1]);
    cont_1++;
}


/*contador del 1 al 10*/
for (let index = 1; index <=10; index++) {
    console.log(index);
}

/*imprimr cuenta de 10 en 10*/
let a=10;
while (a<=100) {
    console.log(`numeros de 10 en 10 ${a}`);
    a+=10;
}

let caracter="";
for (let index = 0; index < 10; index++) {
    caracter+="*";
    console.log(caracter);
}

let c=0;
while (c<3) {

    let nuevoElemento=prompt("Ingresa un nuevo elemento:");
    colores.push(nuevoElemento);
    c++;
}

console.log(colores);

for (let index = 0;index<100; index++) {

    if (index%2===0) {

        console.log(`eñ numero ${index} es par`);
        
    } else {

        console.log(`El numero ${index} es impar`);
        
    }

}
