function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minutos}.`
if (hora >= 0 && hora < 12) {
    // Bom dia!!
    img.src = 'manha4.jpg'
    document.body.style.background = '#DEB887'
} else if (hora >= 12 && hora <= 18) {
    // Boa tarde!!
    img.src = 'tarde.jpg'
    document.body.style.background = '#008080'
} else {
    // Boa noite!!
    img.src = 'noite.jpg'
    document.body.style.background = '#1C1C1C'
}
}