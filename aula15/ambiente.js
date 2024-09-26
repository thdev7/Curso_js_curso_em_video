let num = [5, 8, 2, 6, 7]
num.push(1)
num[2] = 3
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(3)
if (pos == -1) {
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor ${num[pos]} esta na chave ${pos}`)
}