var txtv = window.document.getElementById('vel')

function calcular () {
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade é <strong>${vel} KM/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>multado</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre usando o cinto de segurança</p>`
}