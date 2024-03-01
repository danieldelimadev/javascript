/*
let amigo = {nome: 'José', sexo: 'M', peso: 85.4, engordar(p=0){
    console.log('Engordou.')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
*/
/*let array = [1,2,3,4]

const somar = function(arr) {
    valorTotal = 0
    arr.forEach((value)=>{
        valorTotal+=value
    })
    console.log(valorTotal)
}

somar(array)
*/
let n = 'Fabio'
let list = []
let object = {
    nome: 'José', idade: 18, peso:80
}
list.push(object)
object = {
    nome: n, idade: 19, peso: 60
}
list.push(object)
console.log(typeof list)