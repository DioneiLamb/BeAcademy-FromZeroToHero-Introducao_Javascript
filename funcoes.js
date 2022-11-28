/*
funções ou métodos, como também é chmado, é um bloco de código que podem realizar uma rotina, uma ação ou tarefa especifica

uma função JavaScript é executada quando "algo" a invoca (chama)

uma função JavaScript é definida pela palavra chave "function" seguida de um nome, seguida por parenteses ()

nome das funções podem conter letras, numeros, cifrões (seguindo os mesmos padrçoes das variaveis)

dentro dos parenteses podem conter parametros separados por virgula (paramentro1, paramentro2, etc)

o código executadopela função é colocado dentro das chave {}

*/

//comando que sempre limpa o console antes de apresentar os resultados
console.clear()

// //exemplo 1
// function minha1Funcao(){
//     //meu código vem aqui dentro
//     console.log("Olha a fminha primeira função")
// }
// //pra minha função funcionar, ela tem que ser invocada
// minha1Funcao()

// //exemplo 2 descrevemndo parametros e argumentos, que ficam entre o parenteses
// function funcaoSoma(numero1, numero2){  //nesses parenteses entran os paramentros
//     //meu código vem aqui dentro
//     console.log(numero1 + numero2)
// }
// funcaoSoma(20, 24) // aqui são os argumentos


// //exemplo 3 função com Return
// function minha1FuncaoComRetorno(num1, num2){
//     let total = num1 + num2
//     return total
// }
// console.log(minha1FuncaoComRetorno(20,20))


// // exemplo 4 restaurante pra assimilar a ideia de função
// function meuPratoDeComida (comida1, comida2, comida3, comida4){ //declara a função chamada meu prato de comida que vai erceber as comidas 1 2 3 e 4 
//     return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}` //declara que meu prato vai receber as comidas 1 2 3 e 4 
// }
// const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'batata frita') //declara que meu prato recebeu especificadamente as comidas feijão, arroz. bife e batata frita
// console.log(prato) //mostra meu prato 


// // exemplo 3 usando a arrow function que é a forma mais moderna
// const myFirstArrowFunction = (a, b) => { // devemos guradar a função dentro de uma variavel
//     let somaTotal = a + b
//     return somaTotal;
// }
// const resultado = myFirstArrowFunction(99, 15)
// console.log(resultado)

// // função anonima
 
// (function(){
//     console.log("From Zero to Hero")
// })() // autoexecução

// setTimeout(function(){
//     console.log("Levei 3 segundos para executar!")
// },3000)



// funções parte IV - sobre scopo das funções novamente
// //parte 1
// let assunto
// function criarAssunto(assunto) {
//     return assunto // esse assunto está dentro do scopo interno
// }
// console.log(criarAssunto(assunto));
// // vai dar undefined pois não há parametros associados às variáveis

// //parte 2
// let assunto = 'Estudar' // var = valor
// function criarAssunto(assunto) {
//     return assunto
// }
// console.log(assunto) // → recebe "estudar" do escopo global
// console.log(criarAssunto(assunto));  // → recebe "estudar"

// //parte 3
// let assunto = 'Estudar' // var = valor
// function criarAssunto(assunto) {
//     assunto = 'Escutar música' //mudança de valor
//     return assunto
// }
// console.log(assunto) // → recebe "estudar" do escopo global
// console.log(criarAssunto(assunto)); // → recebe 'escutar música' pois houve uma troca de valor e foi chamada a função 'criarAssunto'

// //parte 4
// let assunto = 'Estudar' // var = valor
// function criarAssunto() { // sem parâmetro
//     return assunto
// }
// console.log(assunto) // → recebe "estudar" do escopo global
// console.log(criarAssunto(assunto)); // → recebe "escutar música" pois a varável mudou e não pegou o valor da global

// // HOISTING é como se  o script estivesse 'ouvindo' e esperando ser chamado, porémsó funciona do "jeito clássico" 
// digaMinhaIdade()

// function digaMinhaIdade(){
//     return console.log(36) //defini o valor depois de ter definido a minha variavel / isso é o jeito oldschool de se fazer
// }

/*
    digaMinhaIdade()

    const digaMinhaIdade = function (){
        return console.log(36) //defini o valor depois de ter definido a minha variavel / isso é o jeito 'moderno' de se fazer e vai dar erro
    }
*/

//Callback function é a arte de execuar uma função dentro de outra função
// function minhaFuncao(Callback){
//     console.log('Inicio da minha função')

//     Callback (15,15)

//     console.log('final da minha função')
// }

// minhaFuncao(
//     (num1, num2) => {
//         return console.log(num1 + num2)
//     }
// )

// função construtora usada pra reaproveitar o código
// abaico é a função 'base'
// function Sum(){ //é nescessário que a 1 letra do nome da minha função seja MAIUSCULA para o js entender
//     this.num1, // é obrigatório usar o 'this'
//     this.num2,
//     this.calc = function (num1, num2){
//         return total = num1 + num2
//     }
// } 

//reaproveitando
// const math = new Sum()
// //console.log(math)
// console.log(math.calc(32,32))

// const math2 = new Sum()
// console.log(math.calc(50,64))

//pode ser assim também, atribuindo novos valores constantes
// const math = new Sum()
// const num1 = math.num1 = 24
// const num2 = math.num1 = 50

// console.log(num1)
// console.log(num2)
// console.log(math.calc(num1,num2))

// const math2 = new Sum()
// const numero1 = math2.num1 = 30
// const numero2 = math2.num1 = 10

// console.log(math.calc(numero1,numero2))

//pode ser assim também
// const math = new Sum().calc(45,45)
// console.log(math)

function Sum(num1,num2){ //posso atribuir parametros dentro da função 
    this.num1 = num1, // porém colocar parametros eu tenho que atribuir valores dentro da variaveis
    this.num2 = num2,
    this.calc = function (num1, num2){
        return total = num1 + num2
    }
} 

const math = new Sum()
console.log(math.calc(20,20)) 

const data = new Date().getDate(); // onstruções nativas do js
console.log(data )