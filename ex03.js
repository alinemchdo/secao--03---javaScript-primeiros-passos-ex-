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

for(index = 0; index < number.length; index +=1){
    if(number[index] %2==0){ 
        console.log('par');   
    }else{
        console.log('impar');
    }
}
