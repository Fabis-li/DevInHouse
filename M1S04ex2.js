var numero1 = 2
var numero2 = 3
var operador = "^"


function calculadora(){

    switch(operador){
        case "+":
            console.log(numero1 + numero2);
            break;
        case "-":
            console.log(numero1 - numero2);
            break;
        case "*":
            console.log(numero1 * numero2);
            break;
        case "/":
            console.log(numero1 / numero2);
            break;
        default:
            console.log("A operação não esta disponível.")
            
    }       
    
}     

calculadora();


