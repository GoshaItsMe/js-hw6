var num = prompt('Введите цыфру');
var space = prompt('Введите отступ');
var symbol = prompt('Введите символ');

console.log(num);
console.log(space);
console.log(symbol);

let sum = '';
let koko = '';
for( let i = 0; i <= num; i++) {
    if(i > 0) {
        sum = sum + space;
        koko = sum + symbol;
    }
    console.log(koko);
}
