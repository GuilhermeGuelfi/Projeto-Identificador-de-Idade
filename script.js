function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var nascimento = window.document.getElementById('txtano').value
    var idade = ano_atual - nascimento
    var res = window.document.getElementById('res')
    var sexo = window.document.getElementsByName('radsex')
    var img = window.document.createElement('img')
    
    if (idade < 0) {
        res.innerHTML = `"${nascimento}" não é um ano válido! Tente novamente!`
    } else {
        var genero = ''
        img.setAttribute('id','foto')
        //HOMEM
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','imagens/criança-homem.jpeg')
            }

            else if (idade >= 10 && idade < 20) {
                //Adolescente
                img.setAttribute('src','imagens/adolescente-homem.jpeg')
            }

            else if (idade >= 20 && idade < 35) {
                //Jovem
                img.setAttribute('src','imagens/homem-jovem.jpeg')
            }

            else if (idade >= 35 && idade < 60) {
                //Adulto
                img.setAttribute('src','imagens/homem-meiaidade.jpeg')
            }

            else if (idade >= 60 && idade < 999) {
                //Idoso
                img.setAttribute('src','imagens/idoso.jpeg')
            }
        }
        else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','imagens/criança-mulher.jpeg')
            }
            if (idade >= 10 && idade < 20) {
                //Adolescente
                img.setAttribute('src','imagens/adolescente-mulher.jpeg')
            }

            if (idade >= 20 && idade < 35) {
                //Jovem
                img.setAttribute('src','imagens/mulher-jovem.jpeg')
            }

            if (idade >= 35 && idade < 60) {
                //Adulto
                img.setAttribute('src','imagens/mulher-meiaidade.jpeg')
            }

            if (idade >= 60 && idade < 999) {
                //Idoso
                img.setAttribute('src','imagens/idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos! <br>`
        res.appendChild(img)
}
}