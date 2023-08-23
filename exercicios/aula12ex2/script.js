function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let saudacao = document.getElementById('saudacao')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são exatamente ${hora} horas`

    if(hora >= 0 && hora < 12){
        saudacao.innerHTML = "Bom Dia"
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#f0dd9c'
    }else if(hora >=12 && hora <= 18){
        saudacao.innerHTML = "Boa Tarde"
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#ffc18c'
    } else{
        saudacao.innerHTML = "Boa Noite"
        img.src = 'foto-noite.jpg'
        document.body.style.background ='#191970'
    }
}