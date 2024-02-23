function check() {
    var start = document.getElementById('stxt')
    var end = document.getElementById('etxt')       
    var pass = document.getElementById('ptxt')
    var res = document.getElementById('res') 
    if (start.value == 0 || end.value == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        for (c = Number(start.value) ; c <= Number(end.value); c += Number(pass.value)) {
        res.innerHTML += `${c} `
        }
    }
}