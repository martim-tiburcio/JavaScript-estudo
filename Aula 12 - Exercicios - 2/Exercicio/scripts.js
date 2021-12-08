function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length <= 0 || Number(fano.value) > ano) {
        alert('[ERROR] Responda os dados corretamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino250px.png')

            } else if (idade < 21) {
                //img.setAttribute('src', 'foto')

            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem250px.png')

            } else {
                img.setAttribute('src', 'imagens/homem-velho250px.png')

            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menina250px.png')

            } else if (idade < 21) {
                //img.setAttribute('src', 'foto')

            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher250px.png')

            } else {
                img.setAttribute('src', 'imagens/mulher-velha250px.png')
            }
        }
        res.style.textAlign = "center" 
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}