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
}

    let age = 20;
let sex = 'M';
let weight = 80;
let height = 166;

if(age <= 0 || weight <= 0 || height <= 0){
    console.log('taxa metabólica basal é: ' + (weight *6,25) + (height *9,99) - (age *4,92) +5);
}
else if (sex ==='M'){ console.log('taxa metabólica basal é: ' + (weight *6,25) + (height *9,99) - (age *4,92) -161);
}

let lotteryNumber = [23, 32, 12, 8, 45, 57];

for (let index = 0; index < lotteryNumber.length; index += 1){
    console.log('Posição ' + index + ' = ' + lotteryNumber[index]);
} 






let lotteryNumber = [];
let firstGame = [12, 47, 2, 31, 58, 8];

for (let index = 0; index < 6; index += 1){
    let randomNumber = Math.ceil(Math.random()*60);

    if(!lotteryNumber.includes(randomNumber)){
        lotteryNumber.push(randomNumber);

    }else{
        index-=1;
    }
} 



let numberOfHits = 0;
let hits = [];

for(let indexLottery = 0; indexLottery < lotteryNumber.length; indexLottery += 1){
    for(indexGame = 0; indexGame < firstGame.length; indexGame += 1){
        if(lotteryNumber[indexLottery] === firstGame[indexGame]){
            numberOfHits += 1;
            hits.push(lotteryNumber[indexLottery])
        }

    }

}

console.log('Numero sorteados', lotteryNumber);
console.log ('Jogo', firstGame );
console.log ('Quantidade de acertos', numberOfHits);
console.log('numeros acertados', hits);

    
let numberSoma = [5 + 9 + 3 + 19 + 70 + 8 + 100 + 2 + 35 + 27]
console.log(numberSoma);

let numberSoma = [5 + 9 + 3 + 19 + 70 + 8 + 100 + 2 + 35 + 27]
console.log(numberSoma /10);



let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let numeroMaior = 0;


for(index = 0; index < number.length; index +=1){
    if(number[index] > numeroMaior){ 
        numeroMaior = number[index];   
    }
}
console.log(numeroMaior);

for(index = 0; index < number.length; index +=1){
    if(number[index] <= numeroMaior){ 
        numeroMaior = number[index];   
    }
}
console.log(numeroMaior);
