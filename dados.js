//Manipulação de dados (Strig e Array) Parte 1

//Type conversion
// converter String para numero e ao contrario
console.clear()

// console.log(Number('9') + 24);
// console.log(typeof String(9)) + 'Converteu esse troço?'

// //concatenar caracteres
// let onePalavra = 'Dionei' // 6 letras
// console.log(onePalavra.length)

// //maiúsculas e minúsculas
// let frase = 'Olha o pessoal da bootcamp ai'
// console.log(frase.toLocaleUpperCase())
// console.log(frase.toLowerCase())

// //convertendo para inteiro
// let decimalNumber = 59.23
// console.log(parseInt(decimalNumber))

// //convertendo para decimal
// let integerNumber = 21
// console.log(parseInt(integerNumber)) // não faz muito sentido já que a gnt não vê diferença

// //tratar casas decimais de numero maluco depois da vírgula
// let niceNumber = 24.5468412544622111
// console.log(niceNumber.toFixed(4)) // no toFixed eu escolho quantas casas decimais eu quero
// console.log(niceNumber.toFixed()) // se eu deixar vazio ele me tra o numeor redondo

// console.log(niceNumber.toFixed(4).replace('.','/')) // no primeiro eu digo qual simbolo eu quero trocar (ponto) pelo segundo (bara)

// //precissão numerica
// let otherNumero = 125/12
// console.log(otherNumero.toPrecision())
// console.log(typeof otherNumero.toPrecision()) //é apresentado como "String"
// console.log(typeof Number(otherNumero.toPrecision())) // coloquei o "typeof" pra saber que tipo de dado que esta saindo
// console.log(Number(otherNumero.toPrecision())) // fazer ele virar numero novamente coloca o "Number"

// //Manipulação de dados (Strig e Array) Parte 2
// /*
//     separando um texto que contem espações, em um array onde cada texto é uma possição do array
// */ 
// let newFrase = 'olá mundo eu estou 😁'
// console.log(newFrase)
// let fraseToArray = newFrase.split(' ') // o "split" captura os espaçõs e transforma em array
// console.log(fraseToArray)
// console.log(typeof fraseToArray) //typeof só pra saber que é um objeto

// convertendo texto pra String usando .join (" ") → permite que vc gere separadores ( - . _ , / '')
// let fraseMedify = fraseToArray.join(" ").toUpperCase();
// console.log(fraseMedify)
// console.log(typeof fraseMedify)// só pra saber se virou string realmente

//verificando se contém palavra ou letra
// let stringInclude = "vem ni mim hero 🚀"
// console.log(stringInclude.includes("hero")) // js é casesensitive isso é, tem que ser igulazinho a caixa das letras senão dá erro

//objetos
// let arrayInclude = [
//     "BeAcademy",
//     "chega mais",
//     "minha",
//     "LINDA",

//     { //isso é um objeto
//         firstName: "Be",
//         lastName: "Livre"
//     }
// ]
// console.log(arrayInclude.includes("Academy")) //não encontrou pois ele não consegue chegar num vetor tipo "objeto"

//string startWith
// console.log(stringInclude.startsWith("vem")) // retorna "true" pois a string começa com "vem"

//string endsWith
// console.log(stringInclude.endsWith("🚀")) // retorna "true" pois a cadeia de caracteres termina com o foguetinho

//transformando um array em caracteres
// let wordToArray = "Qum esta entendendo erga a mão!"
// console.log(Array.from(wordToArray))

//Manipulação de dados (Strig e Array) Parte 3
const faces = ['😀','😁','😂','🤣','😃','😄','😎','😋','😊','😉','😆','😅'] //11 posições(12 lenght)
console.log(faces)

//adicionar item no fim do array
console.log(faces.push('😍'))
console.log(faces)

//adicionar item no inicio do array
console.log(faces.unshift ('🤓'))
console.log(faces)

//adicionar item no fim do array
console.log(faces.pop())
console.log(faces)

//adicionar item no inico do array
console.log(faces.shift())
console.log(faces)

//pegar somente alguns itens do array
//não modificar o array
console.log(faces.slice(5,10))
console.log(faces)

//remover 1 ou mais itens o array
// console.log(faces.splice(2,4))

//encontrar a posição do array
let index = faces.indexOf('😎') //mostra que está na posição 6
console.log(index)

faces.splice(index,1)//removi o item da posição 6 definido anteriormente
console.log(faces)
