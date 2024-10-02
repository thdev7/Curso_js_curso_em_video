let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
        


function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}



function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor inválido ou encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('adicione valores antes de finalizar')
    } else {

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor )
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo temos ${total} numeros cadastrados</p> `
        res.innerHTML += `<p> o maior numero infomado é ${maior}</p> `
        res.innerHTML += `<p> o menor numero infomado é ${menor}</p> `
        res.innerHTML += `<p> somando todos os numeros temos ${soma}</p> `
        res.innerHTML += `<p> a media é ${media}</p> `
        
    }
}