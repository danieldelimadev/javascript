var list = []
let mulher = []

function addpeople() {
    let name = document.getElementById('name')
    let agetxt = document.getElementById('age')
    let sex = document.getElementsByName('radsex')
    let age = Number(agetxt.value)
    let gender = ''
    if (sex[0].checked) {
        gender = 'M'
    } else {
        gender = 'F'
    }
    var people = {
        nome: name.value,
        idade: age,
        sexo: gender
    }
    list.push(people)
    //nome mulheres cadastradas
    for (c in list) {
        if (list[c].sexo == 'F') {
            mulher.push(list[c].nome)
        }
    }
}

function analyse() {
    let res = document.getElementById('res')
    let sum = 0
    res.innerHTML = ''
    //soma das idades
    for (c in list) {
        sum += list[c].idade
    }
    //média 
    let med = sum / list.length
    res.innerHTML += `<p>Foram adicionadas ${list.length} pessoas</p>`
    res.innerHTML += `<p>A média de idade é ${med}</p>`
    res.innerHTML += `<p>As mulheres cadastradas foram: ${mulher}</p>`
}