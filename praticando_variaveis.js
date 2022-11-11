// 1. declare uma variavel de nome "person"
var person
// 2. usado pra saber que tipo de dado é a vaiavel acima é?
console.log(typeof person);
// 3. declare uma variavel e atribua valores
person = {
    name: "Dionei",
    age: 36,
    weight: 90,
    isAdmin: false,
    isAMan: true,
}

/* 4. a variavel "human" abaixo é de que tipo?
object
4.1 atribua a elas as mesmas propriedades e valores do exercício 3
4.2 mostr o console a seguinte menssagem:
O huma <name> tem o peso de <weight> kg.
*/
let human ={
    name: "Dionei",
    age: 36,
    weight: 90,
    isAdmin: false,
    isAMan: true,
}
console.log(typeof human);
console.log(`O humano ${human.name} tem o peso de ${human.weight} kg.`)

// 5. declare uma variavel tipo "aray" de nome "human" sem valor (vazia)
// let humans = []

/* 6. reatribua valor para a variavel acima, colocando dentro dela o objeto "human" da questão 4. (não copiar e colar, mas usar o objeto criado pra inserir no aray) 
*/
let humans = [
    human //este é o item 4.
]
console.log(humans);

// 7. coloque no console o valor da posição zero do array acima
console.log(humans[0].name) // coloquei a possição sero e ainda quiz ver o valor da "name"

// 8. crie um novo objeto "human" e coloque na posição 1 do array "humans"
let newHuman = { 
    name: "Artur Benjamim",
    age: 6,
    weight: 23,
    isAdmin: true,
    isAMan: true,
}

 humans = [
    human, //posição 0
    newHuman //posição 1 que é o novo objeto escrito logo acima dentro do array
 ]
 console.log(humans)// pra ver se ta tudo ok
 //ou
 console.log(humans[1]) //pra ver só a posição 1 do array

 
 //#########################################################
 // 9. sem rodar  código responda o resultado da saída abaixo
 console.log(a)
 var a = 1
 /* a resposta  é que será apresentado o valor "1"

 (ERREI(tenho que rever essa aula =p))

 a resposta correta é que é apresentado "indefinido" pois é lido de cim apra baixo e não tem como apresentar um resultado se ele é definido depois de ser chamado
*/

 let b //professor usou a pois comnetou o cód. anterior / eu vou continuar a sequencia
 console.log(b)
 {
    let b = 2
    console.log(b)
 }
 console.log(b)
 /* a resposta é que primeiro vai ser apresentado "indefinido" pois não foi atribuido o calor para a variavel (let) "b".
  depois vai ser apresentado o valor "2" para o "let" que esta dentro das chaves e por ultimo será apresentado o "undefined" novamente pois, por ser uma global, o "b" ainda está sem valor
  */

  console.log(c)
  {
    let c = 3
    console.log(b)
  }
  console.log(c)
  /* 
  vai dar "erro" pois a diferença da anterior essa NÃO tem um valor atribuido a variavel "c"
  ela só existe dentro do objeto
  */

  const d = 10
  {
    console.log(d)
    const d = 20
    console.log(d)
  }

  /*
  vai apresentar erro pois por ser uma constante de valor 10 não pode ser atribuido outro valor pra ela
  */