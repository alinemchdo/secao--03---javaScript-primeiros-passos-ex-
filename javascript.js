console.log(8 + 10);
console.log(7 - 10);
console.log(7 * 10);
console.log(7 / 10);
console.log(7 % 10);


let soma = 4;
let numeroMaior = 25;


if(soma > numeroMaior){
    console.log ('Soma wins')
}
else if(soma < numeroMaior){
    console.log ('numeroMaior wins')

}



let soma1 = 5;
let soma2 = 26578;
let soma3 = 555;


if( soma1 > soma2 && soma1 > soma3){
    console.log(soma1)
}

else if( soma2 > soma1 && soma2 > soma3){
    console.log(soma2)
}

else if( soma3 > soma1 && soma3 > soma2){
    console.log(soma3)
}


let valor = 0;
let valorFinal;

if(valor === 5){
    valorFinal = 'positive';
}

else if(valor === 3){
    valorFinal = 'negative';
}

else if(valor === 0){
    valorFinal = '0';
}

console.log(valorFinal);


let numero1 = 5;
let numero2 = 7
let numero3 = 88

if(numero1 %2==0 || numero2 %2==0|| numero3 %2==0){
    console.log(true);
} else{
    console.log(false);
}

let numero1 = 5;
let numero2 = 7
let numero3 = 88

if(numero1 %2==0 || numero2 %2==0|| numero3 %2==0){
    console.log(true);
} else{
    console.log(false);
}

let menu = ['pizza', 'burger', 'cachorro quente', 'yakissoba', 'guioza',]


menu.push('carne');

menu[6] = 'chocolate';

console.log(menu);


let marina = 27;
let silvia = 18;
let iza = 63;

if(marina < silvia && marina < iza){
    console.log('marina');
}

else if (silvia < marina && silvia < iza){
    console.log('silvia');
}
else{
    console.log('iza');