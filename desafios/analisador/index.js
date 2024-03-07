var list = []

function addpeople() {
    res.innerHTML = ''
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
}

function analyse() {
    let res = document.getElementById('res')
    let sum = 0
    let mulher = []
    let older = []
    res.innerHTML = ''
    //soma das idades
    for (c in list) {
        sum += list[c].idade
        
        //mulheres cadastradas
        if (list[c].sexo == 'F') {
            mulher.push(list[c].nome)
        }
        //pessoas acima da média
        if (list[c].idade > med) {
            older.push(list[c].nome)
        }
    }
    
    
    res.innerHTML += `<p>Foram adicionadas ${list.length} pessoas</p>`
    res.innerHTML += `<p>A média de idade é ${med.toFixed(2)}</p>`
    if (mulher.length != 0){
        res.innerHTML += `<p>As mulheres cadastradas foram: ${mulher}</p>`
    }
    res.innerHTML += `<p>Pessoas com idade acima da média: ${older}}</p>`

}