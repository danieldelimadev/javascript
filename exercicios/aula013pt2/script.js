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
        var foto = ''
        if (fsex[0].checked) {
                genero = 'Homem'
            if (idade > 0 && idade < 10) {
                foto = '<img src="imagens/bebeM.png" alt="bebe">'
            } else if (idade < 21) {
                foto = '<img src="imagens/jovemM.png" alt="jovem">'
            } else if (idade < 50) {
                foto = '<img src="imagens/adultoM.png" alt="adulto">'
            } else if (idade <= 100) {
                foto = '<img src="imagens/idosoM.png" alt="idoso">'
            } else {
                foto = '<img src="imagens/rip.png" alt="morto">'
            }

        } else {
            var genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                foto = '<img src="imagens/bebeF.png" alt="bebe">'
            } else if (idade < 21) {
                foto = '<img src="imagens/jovemF.png" alt="jovem">'
            } else if (idade < 50) {
                foto = '<img src="imagens/adultoF.png" alt="adulta">'
            } else if (idade <= 100) {
                foto = '<img src="imagens/idosoF.png" alt="idosa">'
            } else {
                foto = '<img src="imagens/rip.png" alt="rip">'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.innerHTML += foto
    }
    
}