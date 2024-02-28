var array = []
var infor = document.getElementById('res')
function add() {
    infor.innerHTML = ''
    var num = document.getElementById('numtxt')
    let res = document.getElementById('vadc') 
    if (num.value <= 0 || num.value > 100) {
        window.alert('Por favor, digite um número valido!')
    } else {
        let n = Number(num.value)
        if (array.indexOf(n) != -1) {
           window.alert('Este número ja foi adicionado.') 
        } else {
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            res.appendChild(item)
            array.push(n)
        }
    }
}

function info() { 
    if (array.length == 0) {
        window.alert('Adicione números antes de finalizar')
    } else {
        infor.innerHTML = ''
        //Maior valor, menor valor, soma dos valores e média
        let bigger = 0
        let lower = 0
        let sum = 0
        let gpa = 0
        for (v in array) {
            //maior
            if (v == 0 || array[v] > bigger){
                bigger = array[v]
            }
            //menor
            if (v == 0 || array[v] < lower) {
                lower = array[v]
            }
            //soma
            sum += array[v]
            //média
            gpa = sum / array.length
        }
        //Informar quantidade de números cadastrados
        infor.innerHTML += `<p>Ao todo, temos ${array.length}. números cadastrados.</p>`
        infor.innerHTML += `<p>O maior valor informado é ${bigger}.</p>`
        infor.innerHTML += `<p>O menor valor informado é ${lower}.</p>`
        infor.innerHTML += `<p>Somando todos valores, temos ${sum}.</p>`
        infor.innerHTML += `<p>A média dos valores digitados é ${gpa.toFixed(2)} </p>`
    }
}

    