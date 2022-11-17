/*
funções ou métodos, como também é chmado, é um bloco de código que podem realizar uma rotina, uma ação ou tarefa especifica

uma função JavaScript é executada quando "algo" a invoca (chama)

uma função JavaScript é definida pela palavra chave "function" seguida de um nome, seguida por parenteses ()

nome das funções podem conter letras, numeros, cifrões (seguindo os mesmos padrçoes das variaveis)

dentro dos parenteses podem conter parametros separados por virgula (paramentro1, paramentro2, etc)

o código executadopela função é colocado dentro das chave {}

*/

//exemplo 1
function minha1Funcao(){
    //meu código vem aqui dentro
    console.log("Olha a fminha primeira função")
}
//pra minha função funcionar, ela tem que ser invocada
minha1Funcao()

//exemplo 2 descrevemndo parametros e argumentos, que ficam entre o parenteses
function funcaoSoma(numero1, numero2){  //nesses parenteses entran os paramentros
    //meu código vem aqui dentro
    console.log(numero1 + numero2)
}
funcaoSoma(20, 24) // aqui são os argumentos


//exemplo 3 função com Return
function minha1FuncaoComRetorno(num1, num2){
    let total = num1 + num2
    return total
}
console.log(minha1FuncaoComRetorno(20,20))


// exemplo 4 restaurante pra assimilar a ideia de função
function meuPratoDeComida (comida1, comida2, comida3, comida4){ //declara a função chamada meu prato de comida que vai erceber as comidas 1 2 3 e 4 
    return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}` //declara que meu prato vai receber as comidas 1 2 3 e 4 
}
const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'batata frita') //declara que meu prato recebeu especificadamente as comidas feijão, arroz. bife e batata frita
console.log(prato) //mostra meu prato 


// exemplo 3 usando a arrow function que é a forma mais moderna
const myFirstArrowFunction = (a, b) => { // devemos guradar a função dentro de uma variavel
    let somaTotal = a + b
    return somaTotal;
}
const resultado = myFirstArrowFunction(99, 15)
console.log(resultado)

