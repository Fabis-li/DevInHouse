let impares = 0;
let contador = 0;

while (impares < 10){    
    contador++    
    console.log('Contador -', contador);
    if(contador % 2 !== 0){
        impares++
        console.log("contador Impar -", contador)
    }
}
