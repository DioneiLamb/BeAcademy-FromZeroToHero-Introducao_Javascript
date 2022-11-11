// variaveis são identificadores que reservam espaços da memória para receber valores
/*
nome, identificação ou apelido para algum valor
utiliza espaços da memória ram para armazenar informações
estes valores podem variar de a cordo com o tempo ou podem ser constantes
tem palavras reservadas para construir uma variavel

→ var
pode sofrer mudanças de valor no decorer do código

→ let
variavel que pode sofrer mudanças de valor ao longo do código, geralmente é usado dentro de um escopo (bloco de código)

→ const
tem o valor imutável, não pode receber outro valor, é fixo por todo o código
*/
var nome1 = "Dionei" //declarei a variavel do tipo string e ela recebe o valor de "dionei"
console.log(nome1) //chamei a variavel

let nome2 = "lamb"
console.log(nome2)

nome2 = "36" //mudei o valor para um tipo de integer
console.log(nome2)

//testando a const
const nome3 = "Rogério"
console.log(nome3)
// nome3 = "30" // mensagem de erro ao tentar alterar o valor da const. Uncaught TypeError: Assignment to constant variable.

//variaveis  globais
console.log('variável name existe aqui?', name)
{ // isso é um scopo ou bloco de código
    //local
    var name = "professor Luan"
}
console.log('variável name existe aqui?', name)
/* 
o efeito acima deu certo pois o javascript fez um hoisting (só é feito pelo tipo VAR) que é trazer o valor de dentro do bloco e colocar no topo, tipo isso:

var name = "professor Luan"
console.log('variável name existe aqui?', name)
{ 
    name = "dionei"
}
console.log('variável name existe aqui?', name)
*/

// variaveis locais
let nome5 = "Artur" // declarei 'globalmente'
{   //scopo (bloco de codigo)
    let nome5 = "Benjamim" //declarei o valor entro do scopo
    console.log('meu nome aparece aqui?', nome5) //recebe o valor declarado dentro do escopo. se eu NÃO declarar um tipo de variavel (let do exemplo) ele vai pegar o valor do let global
    //let e const funcionam dentro de do scopo
}
console.log('meu nome aparece aqui?', nome5) //pega o valor da global