var agora = new Date()
var diasem = agora.getDay()

/* DOMINGO ==0 
   SEGUNDA == 1
   TERÇA == 2
   QUARTA == 3
   QUINTA == 4 
   SEXTA == 5  
   SABADO == 6
   */

   switch(diasem) {
    case 0:
        console.log('Hoje é Domingo')
        break

    case 1:
        console.log('Hoje é Segunda - Feira')
        break

    case 2:
        console.log('Hoje é Terça - Feira')
        break

    case 3:
        console.log('Hoje é Quarta - Feira')
        break

    case 4:
        console.log('Hoje é Quinta - Feira')
        break

    case 5:
        console.log('Hoje é Sexta - Feira')
        break

    case 6:
        console.log('Hoje é Sábado')
        break

    default :

        break
   }