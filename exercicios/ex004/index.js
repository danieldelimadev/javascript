function check() {
    var start = document.getElementById('stxt')
    var end = document.getElementById('etxt')       
    var pass = document.getElementById('ptxt')
    var res = document.getElementById('res') 
    var c = parseInt(start.value)
    var e = parseInt(end.value)
    var p = parseInt(pass.value)
    if (start.value == '' || end.value == ''){
        res.innerHTML = '<p></p>'
        res.innerHTML += 'Impossivel contar!'
    } else if (c < e) {
        //Contagem normal 
        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            var p = 1 
        }
        res.innerHTML = '<p></p>'
        for (c ; c <= e ; c += p) {
        res.innerHTML += `${c} 👉 `
        }
        res.innerHTML += '🏁'
    } else {
        //Contagem regresiva
        if (p < 0) {
            var p = p - +p * 2 
        }
        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            var p = 1
        }
        res.innerHTML = '<p></p>'
        for (c ; c >= e ; c -= p) {
        res.innerHTML += `${c} 👉`
        }
        res.innerHTML += '🏁'
    }
}