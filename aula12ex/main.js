function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    if (hora >= 5 && hora < 12) {
        //BOM DIA
        img.src = 'imagem/manha1.png'
        document.body.style.background = '#E3CBA0'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagem/tarde1.png'
        document.body.style.background = '#CBA26F'
    } else{
        img.src = 'imagem/noite1.png'
        document.body.style.background = '#00173F'
    }
}
