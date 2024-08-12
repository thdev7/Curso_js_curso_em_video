var n1 = Number(window.prompt('Digite um numero: '))
        var n2 = Number(window.prompt('Digite outro numero: '))
        var soma = n1 + n2
        alert(`a soma entre ${n1} e ${n2} é igual a ${soma}`)

        //sem template string ficaria: alert('A soma entre os valores é '+soma) teria que usar o + para concatenar, mas com o template string basta usar ${} obs substitui a '' por ``




        // number + number para adição
        //string + string para concatenação

        //para fazer a coversão de string para float é usado Number.parseInt para inteiro e Number.parseFloat para flutuante. ou apenas Number o js indentifica se é float ou int

        //para converter para string basta colocar o tipo primitivo na frente ex: alert('A soma entre os valores é '+ String(soma)) ou soma.toString()