function verificar() {
    var data = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value <= 0 || fano.value > data) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var idade = data - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade > 0 && idade < 10) {
                res.innerHTML += '<img src="bebeM" alt="bebe">'
            } else if (idade < 21) {

            } else if (idade < 50) {

            }

        } else {
            var genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
    
}