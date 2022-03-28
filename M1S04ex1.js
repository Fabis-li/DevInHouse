 // jovens até 15 anos
 // adultos 16 até 64 anos
 // idoso acima de 65 anos
 
 var idade = parseInt(prompt("Qual a sua idade?"));

if (idade <= 15){
    console.log("Você é Jovem.")
} else if (idade > 15 && idade <= 64) {
    console.log("Você é adulto.")    
} else {
    console.log("Você é idoso.")
}

