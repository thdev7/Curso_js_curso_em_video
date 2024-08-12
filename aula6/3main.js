        var nome = window.prompt('Qual é o seu nome? ')
        document.write(`Olá <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.   `)
        document.write(`Seu nome em maiúsculo é  ${nome.toLocaleUpperCase()} e em minusculo é ${nome.toLocaleLowerCase()}`)

        //O .length mostra quantas letras a palavra tem.  .toUpperCase() deixa tudo maiusculo e o .toLowerCase() minusculo 

        //para mostrar dois digitos de um numero float depois do ponto basta usar .toFixed ex: n1.toFixed(2)
        //para mostrar 3 digitos  n1.toFixed(3)
        // para trocar o ponto por virgula :n1.toFixed(2).replace('.', ',')

        //para converter o valor para a moeda do brasil é usado o seguinte comando 
        // n1.toLocateString('pt_BR', {style: 'currency', currency: 'BRL'})