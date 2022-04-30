function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('manha')
    
    var atual = new Date()
    var hora = atual.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12){
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#D48138'
    }
    else if (hora < 18){
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#216DA0'
    }
    else{
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#4C636F'
    }
}
