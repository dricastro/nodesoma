let readlineSync = require('readline-sync');
/*
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let total = 0;

console.log('Programa que soma 4 numeros');
n1 = parseFloat(readlineSync.question('Informe o primeiro numero:'));
n2 = parseFloat(readlineSync.question('Informe o segundo numero:'));
n3 = parseFloat(readlineSync.question('Informe o terceiro numero:'));
n4 = parseFloat(readlineSync.question('Informe o quarto numero:'));
total = n1 + n2 + n3 + n4;
console.log(`Total = ${total}`); */

/*
let n = 0;
let total = 0;

console.log('Programa que soma 4 numeros');
n = parseFloat(readlineSync.question('Informe o primeiro numero:'));
total += total + n; 
n = parseFloat(readlineSync.question('Informe o segundo numero:'));
total += total + n;
n = parseFloat(readlineSync.question('Informe o terceiro numero:'));
total += total + n;
n = parseFloat(readlineSync.question('Informe o quarto numero:'));
total += total + n;
n = parseFloat(readlineSync.question('Informe o quarto numero:'));
total += total + n;
n = parseFloat(readlineSync.question('Informe o quarto numero:'));
total += total + n;
n = parseFloat(readlineSync.question('Informe o quarto numero:'));
total += total + n;
n = parseFloat(readlineSync.question('Informe o quarto numero:'));
total += total + n;
n = parseFloat(readlineSync.question('Informe o quarto numero:'));
total += total + n;
n = parseFloat(readlineSync.question('Informe o quarto numero:'));
total += total + n;

console.log(`Total = ${total}`); */

/*
let total = 0;

console.log('Programa que soma 10 números');

for (let i = 1; i <= 10; i++) {
    let n = parseFloat(readlineSync.question(`Informe o ${i}º número: `));
    total += n;
}

console.log(`Total = ${total}`);*/

let n = 10;
let total = 0;
let i = 1;
console.log('Programa que soma 10 números');
while(n!=0){
    n = parseFloat(readlineSync.question(`Informe o ${i} numero: `));
    total = total + n;
    i++;
}
console.log(`Total = ${total}`);