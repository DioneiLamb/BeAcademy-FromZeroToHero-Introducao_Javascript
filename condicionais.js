//if and else ou traduzindo se e se não
let num = 10;
let num2 = 20;
let isAdmin = true;

// posso  usar todos os operadores > < == === != !==
if (num < 5) {
  // abre um bloco
  console.log("sou maior que 5");
} else {
  console.log("sou menor que 5");
}

//  &&  (and)
if (num >= 10 && num2 >= 10) {
  // se AMBOS forem verdade
  console.log("VERDADE");
} else {
  console.log("FALSO");
}

//  || (or)
if (num >= 10 || num2 >= 10) {
  // se um OU outro for verdade
  console.log("VERDADE");
} else {
  console.log("FALSO");
}

//  ! (NOT)
if (!isAdmin) {
  // isAdmin é falso? → estou negando a negação então é verdadeiro - + - = +
  console.log("ele não é adimin");
} else {
  console.log("ele é admin e tem permissão");
}

//fazendo uma ternária com as condições
if (num < 10) {
  //se num é MAIOR que 10
  console.log("num é maior que 10");
} else if (num <= 10 && num2 == 20) {
  //se num é MAIOR OU IGUAL que 10 E num2 É IGUAL a 20 também
  console.log("segunda resposta verdade");
} else {
  console.log("resposta falsa");
}

//pra não usar muito ID ELSE melhor usar o SWITCH
let myExpression = "a";

switch (myExpression) {
  case "a": //caso for apertado a letra "a" mostrar na tela
    console.log("Apertou o A");
    break; //parar a execução para não aparecer o rstante do código caso um evento for verdade
  case "b":
    console.log("Apertou o A");
    break;
  case "c":
    console.log("Apertou o A");
    break;
  default:
    console.log("vc apertou outra tecla", myExpression);
}

//usando o switch numa calculadora simples
function calc(numero1, operador, numero2) {
  let result;

  switch (operador) {
    case "+":
      result = numero1 + numero2;
      break;

    case "-":
      result = numero1 - numero2;
      break;

    case "/":
      result = numero1 / numero2;
      break;

    case "*":
      result = numero1 * numero2;
      break;

    default:
      console.log("não entendi");
      break;
  }

  return result
}

console.log(calc(4, '*', 25)) //retorna 100
console.log(calc(4, 's', 25)) // retorna a mensagem "não entendi" e valor undefined


// throw e try catch
function minhaIdade(myAge){
    if(myAge){
        throw "vc precisa colocar sua idade"
    }
    console.log('eu executei depois do erro')
}

try{
    minhaIdade(36)
    console.log('já tratei e deu certo')
}catch(error){
    console.log(error)
}

console.log('o programa continua')


// estrutura de repetição FOR → (inicio; condição; iteração)
for (let i = 1; i <= 10; i++) {
    console.log(i)
}   

console.log('abaixo estrutura for com um break ou continuar')

for (let i = 10; i >= 1; i--) {
    if(i === 5){ //=== tem que ser igual o tipo e o valor
        //break //para a contagem
        continue // vai pular o 5
    }
    console.log(i)
}   

// repetição WHILE (enquanto) → é mais usado quando a gnt não sabe quando vai parar(atingir a condição)
console.log('abaixo estrutura while')
let interator = 1
while (interator <= 20){
    console.log(interator)

    //dando um incremento pra funcionar
    interator++
}

// estrutura FOR OF → usado em array
console.log('abaixo estrutura FOR OF')

let number =[2,4,3,5,6]
for (num of number){ //o num recebe os valores do array
    if(num > 4){
        console.log(num)
    }
}

console.log('outro exemplo da estrutura for of')

let names =['maria','pedro','tiago','joão','dionei']
for (num of names){
        console.log(num)
    }

// estrutura FOR IN → usado em array
console.log('abaixo estrutura FOR IN')

let animais ={
    nome: 'leão',
    peso: 200,
    idade: 4
}

for (item in animais){
    //tipo 1 para capturar os valores do objeto
    console.log(animais["peso"])
    //tipo 2 para capturar todo o objeto
    console.log(animais)
    //tipo 3 para mostrar os valores dentro das propiedades
    console.log(animais[item])
    //tipo 4 captura valores individuais das propiedades de um objeto
    console.log(animais.idade)
}

console.log('array com nomes')
let arrayNomes = [
    'dionei',
    'rogerio',
    'artur',
    'benjamim',
    'julia',
]

for (item in arrayNomes){
    // console.log(arrayNomes) //mostra todo array
    // console.log(arrayNomes[item]) //mostra todos os valores
    // console.log(arrayNomes[2]) //mostra diretamente o valor
    console.log(item) //index dos vetores (posições)
}