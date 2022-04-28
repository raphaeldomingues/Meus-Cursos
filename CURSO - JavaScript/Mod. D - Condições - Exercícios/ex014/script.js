function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Good Morning!
        img.src = 'manha.png'
        document.body.style.background = '#7d6f4c'
    } else if (hora >= 12 && hora < 18) {
        //Good afternoon!
        img.src = 'tarde.png'
        document.body.style.background = '#b7e3fe'
    } else {
        //Good Night!
        img.src = 'noite.png'
        document.body.style.background = '#314b8d'
    }
}