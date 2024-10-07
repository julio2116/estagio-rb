//1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele 
// calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const fibonacciFrequence = (number) => {

    let frequence = [0];
    let actualNumber = 1;

    for(let i = 0; actualNumber <= number; i++){
        frequence.push(actualNumber);
        console.log(frequence)
        if(number == actualNumber){
            return `${number}, pertence a frequência de Fibonacci`;
        } else if (number > actualNumber) {
            actualNumber = frequence[i] + actualNumber;
        }
    }
    return `${number}, não pertence a frequência de Fibonacci`;
}
// let numberTested = Number(prompt('Digite um número para verificação:'));
// console.log(fibonacciFrequence(numberTested));


// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula,
// além de informar a quantidade de vezes em que ela ocorre.
// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser
// previamente definida no código;

const stringVerified = (word) => {
    
    let letterCount = 0;

    for(let i = 0; i <= word.length; i++){
        let letter = word.at(i);

        if(letter == 'A' || letter == 'a'){
            letterCount++;
        }
    }

    if(letterCount > 0){
        return `A palavra "${word}", possui ${letterCount}, letras "A"!`;
    } else {
        return `Não existem letras "A" na palavra ${word}!`;
    }
}

// console.log(stringVerified('parAlelepipedo'));



// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto
// K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 12;
let soma = 0;
for(let k = 1; k < indice; k++){
    soma += k;
}
console.log(soma); //66


// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___9 - Números ímpares
// b) 2, 4, 8, 16, 32, 64, ____128 - Dobro do elemento anterior
// c) 0, 1, 4, 9, 16, 25, 36, ____49 - a diferença entre os números é sempre um número ímpar aumentando de dois em dois, 1, 3, 5, 7...
// d) 4, 16, 36, 64, ____100 - A diferença entre os números aumenta de 8 em 8, 12, 20, 28...
// e) 1, 1, 2, 3, 5, 8, ____13 - Fibonacci
// f) 2, 10, 12, 16, 17, 18, 19, ____ - Não identificado


// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes.
// Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
// Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas
// até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

//Caso a lampâda aqueça conforme o temmpo em que esteja ligada, é possível ligar um dos interruptores e aguardar algum tempo para que
//a lâmpada aqueça, em seguida desligo o primeiro interruptor ligado e ligo o segundo, vou então até a primeira sala, se for possível
//tocar a lâmapada verifico um dos três casos: Se estiver acessa, a lâmpada é controlada pelo segundo interruptor ligado
//(O único ligdo no momento), caso não esteja acessa, verifico se está quente, caso esteja a lâmpada é controlada pelo primeiro 
//interruptor, mas caso esteja vazia é controlada pelo terceiro interruptor, assim que confirmar o primeiro interruptor repito o raciocinio
//para a segunda sala que visitar, a lâmpada da sala restante será controlada pelo interruptor restante.