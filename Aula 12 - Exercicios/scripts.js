function carregar() {
    var msg = window.document.querySelector('div#msg')
    var imagem = window.document.querySelector('img#imagem')
    var date = new Date()
    var hora = date.getHours()
    var minuto = date.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}hrs`
    
    //var hora = 19
    //msg.innerHTML = `Agora são ${hora}hrs`
    
    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/manha250px.png'
        window.document.body.style.backgroundColor = '#c8d3d6'
    
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = 'imagens/tarde250px.png'
        document.body.style.backgroundColor = '#ae7e7b'
    
    } else if (hora > 18 && hora <= 24) {
        imagem.src = 'imagens/noite250px.png'
        document.body.style.backgroundColor = '#18384a'
    }
}