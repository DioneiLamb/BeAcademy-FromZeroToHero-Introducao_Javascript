//operadors lógicos

//operadores de incremento ++ e decremento --
let incrementNumber = 4
console.log(incrementNumber)
//adicionando +1 aos 4 originais
incrementNumber++ //vai dar 5
console.log(incrementNumber)
incrementNumber++ //vai dar 6
console.log(incrementNumber)

let decrementNumber = 50
console.log(decrementNumber)

decrementNumber-- // vai dar 49
console.log(decrementNumber)


//operadores aritméticos de soma + subtração - divisão / multiplicação * e sobra %
let nota1 = 10
let nota2 = 7.5
let nota3 = 5.5
let nota4 = 3.5

let media = (nota1+nota2+nota3+nota4)/4
console.log(media) //media tipo float
console.log(Number(Math.floor(media)))


//operadores relacionai e igualdade
//      !=       diferente no valor
//      !==      diferente no valor ou diferente no tipo (OR)
//      ==       igual no valor
//      ===      igual no valor e no tipo (AND)
//      >        maior que
//      <        menos que
//      >=       maior ou igual a
//      <=       menor ou igual a
//      ?        operador ternário

let numberRelation1 = 20
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2
console.log(relation)

relation = numberRelation1 !== numberRelation2
console.log(relation)

relation = numberRelation1 == numberRelation2
console.log(relation)

relation = numberRelation1 === numberRelation2
console.log(relation)


// operador de atribuição
let nweNumber = 20 // valor original
console.log(nweNumber)

nweNumber += 40 // adiciona + 40 aos 20 que dá 60
console.log(nweNumber)

nweNumber *= 3 // 60 multilicado por 3 que dá 180
console.log(nweNumber)

nweNumber -= 60 // 180 menos 60 que dá 120
console.log(nweNumber)

nweNumber /= 6 //120 dividido por 6 que dá 20
console.log(nweNumber)

nweNumber %= 5 // resto 0 pois o 5 cabe 4x dentro do 20
console.log(nweNumber)


//operadores condicionais (ternário)
//(condition) ? true : false
let value1 = 24
let value2 = 32

const newCondition = value1 >= value2 ? 'Isso é verdade' : 'Isso é mentira'
//testa se o valor1 é MAIOR ou igual ao valor2
console.log(newCondition)

const newCondition2 = value1 >= value2 ? 'Isso é verdade' 
                              : value1 <= value2 ? 'Isso é verdade, segunda resposta true' : 'Resposta falsa para tudo'
//testa se o valor1 é MENOR ou igual ao valor2
console.log(newCondition2)