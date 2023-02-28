let lotteryNumber = [];
let firstGame = [12, 47, 2, 31, 58, 8];

for (let index = 0; index < 6; index += 1){
    let randomNumber = Math.ceil(Math.random()*);

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

