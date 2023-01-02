//Este archivo debe calcular el factorial de 10 utilizando un bucle while

let number = 10; // Number of which we want to calculate the factorial
let factorial = 1;

while(number>=1){
    factorial *= number;
    number--;
}
console.log(factorial);