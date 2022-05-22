function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#44b0dbe7'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.png')
            } else if(idade < 21){
                //adolescente
                img.setAttribute('src','adolescente-menino.png')
            } else if( idade < 50 ){
                //adulto
                img.setAttribute('src','homem.png')
            }else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else {
            genero = 'Mulher'
            document.body.style.background = '#ca8bd6c5'
            if(idade >=0 && idade <10){
                //criança

                img.setAttribute('src','menina.png')
            } else if(idade <21){
                //adolescente
                img.setAttribute('src','adolescente-menina.png')
            } else if( idade < 50 ){
                //adulto
                img.setAttribute('src','mulher.png')
            }else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
    
}
