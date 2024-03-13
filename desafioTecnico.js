// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

const sum = () => {
  let soma = 0;
  let k = 0;

  for (let i = 13; k < i; k++) {
    soma = soma + k;
    console.log(soma);
  }
};

sum();

// Ao final do processamento, qual será o valor da variável SOMA? Valor da soma 78

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const num = 3;

const fibonacci = (num) => {
  let sequenciaFibonacci = [];

  for (let i = 0; num >= i; i++) {
    if (sequenciaFibonacci[sequenciaFibonacci.length - 1] === undefined) {
      sequenciaFibonacci = [0, 1];
    }

    sequenciaFibonacci.push(
      sequenciaFibonacci[sequenciaFibonacci.length - 2] +
        sequenciaFibonacci[sequenciaFibonacci.length - 1]
    );
  }

  const res = sequenciaFibonacci.find((n) => {
    return n == num;
  });

  if (!res) {
    console.log("O número informado não pertence a sequência de Fibonacci!!!");
  } else if (res) {
    console.log("O número informado pertence a sequência de Fibonacci!!!");
  }
};

fibonacci(num);

// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, 9

// b) 2, 4, 8, 16, 32, 64, 128

// c) 0, 1, 4, 9, 16, 25, 36, 49

// d) 4, 16, 36, 64, 100

// e) 1, 1, 2, 3, 5, 8, 13

// f) 2,10, 12, 16, 17, 18, 19, 200

// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as
//lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual
//interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// res1.: Na primeira ida, deixaria dois interruptores acessos, por eliminação identificaria qual interruptor controla a lampada que não se acendeu.
// Ao retornar a sala de interruptores abaixaria somente um interruptor dos dois que estão acionador e retornaria a sala das lampadas, assim, também por eliminação identificaria a qual lampada aquele interruptor está associado.

//res2.: Otimizando o tempo, poderia também ligar os dois interruptores deixando por alguns minutos acesso, assim abaixaria somente um deles, 
//após iria até a sala das lampadas, tocaria nas duas lampadas apagadas , assim, por eliminação identificaria qual lampada corresponde ao interruptor 
//que acionei e depois desliguei atraves da temperatura da mesma. Logo, em apenas uma ida conseguiria determinar qual interruptor aciona cada lampada .

//

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

// NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU .

let reverseString = "Luan Moura"
const res = () => {
  const reverse = reverseString.split("")
   let strReversed =""

  for(let i= reverse.length -1; i>=0; i--) {
    strReversed += reverse[i]
  
  }
  return strReversed.toLowerCase() 
}
console.log(res())
