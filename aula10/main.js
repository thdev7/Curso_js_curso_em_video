var a = window.document.getElementById('area')

        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', saiu)

        function clicar() {
            a.innerText = 'Clicou'
            a.style.background = 'red'
        }

        function entrar() {
            a.innerText =  'Entrou'
        }

        function saiu() {
            a.innerText = 'Saiu'
            a.style.background = 'green'
        }