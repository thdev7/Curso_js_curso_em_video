function calcular () {
    var pais = window.document.getElementById('nac')
    var res = window.document.getElementById('res')
    var nac = String(pais.value).toUpperCase()
    res.innerHTML = `<p>Seu pais é <strong>${nac}</strong></p>`

    if (nac == 'BRASIL') {
        res.innerHTML += '<p>Você é brasileiro</p>'
    } else {
        res.innerHTML += '<p>No <strong>Brasil</strong> você é estrangeiro<p>'
    }
    
}