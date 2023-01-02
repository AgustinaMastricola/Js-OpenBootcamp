//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

const number = 10; // Number of which we want to calculate the factorial
let factorial = 1;
for(let i = number; i>0; i--){
    factorial *= i;
}
console.log(factorial);