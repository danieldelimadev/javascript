function create() {
    var txtt = document.getElementById('txtt')
    var t = Number(txtt.value)
    var res = document.getElementById('res') 
    var c = 1
    while (c <= 10) {
        res.innerHTML += `<p>${t} X ${c} = ${t * c}</p>`
        c++
    }
}