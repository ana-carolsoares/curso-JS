function carregar(){
var msg = document.getElementById('hora')
var img = document.getElementById('img')
var hora = 15
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora <= 12){
     img.src = 'img/manha.png'
     document.body.style.background = '#c4b7059d'
} else if (hora <= 18){
    img.src = 'img/tarde.png'
    document.body.style.background = '#ac3b068e'
} else{
    img.src = 'img/noite.png'
    document.body.style.background = '#061fac8e'
}
}
