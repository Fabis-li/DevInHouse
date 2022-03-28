const array = [ 0, 32, 45, 50, 75, 80, 99, 120 ];

const conversao = array.map(array => Math.round((array - 32) * 5 / 9));

console.log("Array original: " + array, "\n" +
 "Array convertida para Fahrenheit: " + conversao );