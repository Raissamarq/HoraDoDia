function carregar(){
    var msg = window.document.getElementById('msg')
    var img =  window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora<12){
        img.src = "img/manha1.png"
        document.body.style.background = '#dea96a'
        bom.innerHTML ='Bom dia!'
    }else if(hora>=12 && hora<=18){
        img.src ="img/tarde1.png"
        document.body.style.background = '#ec515a'
        bom.innerHTML ='Boa tarde!'
    }else{
        img.src ="img/noite1.png"
        document.body.style.background = '#21083d'
        bom.innerHTML ='Boa noite!'
    }
}




