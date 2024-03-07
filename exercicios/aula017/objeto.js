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
*/

var pessoa = {
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function () {
        console.log(
            this.nome[0] +
            ' ' + 
            this.nome[1] +
            ' tem ' +
            this.idade +
            ' anos de idade. Ele gosta de ' +
            this.interesses[0] +
            ' e ' +
            this.interesses[1] +
            '.'
        )
    },
    saudacao: function () {
        console.log('Oi! Eu sou ' + this.nome[0] + '.')
    }
}
console.log(pessoa.nome)
console.log(pessoa.nome[0])
console.log(pessoa.idade)
console.log(pessoa.interesses[1])
console.log(pessoa.bio())
console.log(pessoa.saudacao())