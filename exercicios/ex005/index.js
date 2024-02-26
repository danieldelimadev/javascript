function create() {
    var txtt = document.getElementById('txtt')
    var res = document.getElementById('tabu') 
    if (txtt.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let t = Number(txtt.value)
        let c = 1
        res.innerHTML  = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${t} X ${c} = ${t*c}`
            res.appendChild(item)
            c++
        }
    }
}
    