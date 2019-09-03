const corpo = document.getElementsByTagName('body')[0];
const root = document.createElement('div');
root.setAttribute('id', 'root');
corpo.appendChild(root);

const colab = document.createElement('h1');
colab.innerHTML = 'Colaboradores';
root.appendChild(colab);

const autor = document.createElement('div');
autor.setAttribute('class', 'authors');
root.appendChild(autor);

fetch('https://randomuser.me/api/?results=10')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    console.log('top')

    data.results.forEach(element => { 
        const card = document.createElement("div")
        card.setAttribute("class", "card")
        autor.appendChild(card)

        let imagem = document.createElement('img')
        imagem.setAttribute('src', element.picture.large)
        card.appendChild(imagem)

        let nome = document.createElement('h2')
        nome.innerHTML = element.name.first + ' ' + element.name.last
        card.appendChild(nome)

        let local = document.createElement('h3')
        local.innerHTML = element.location.city + ', ' + element.nat
        card.appendChild(local)

        let email = document.createElement('p')
        email.innerHTML = element.email
        card.appendChild(email)

        let tel = document.createElement('p')
        tel.innerHTML = element.cell
        card.appendChild(tel)
    })  
})
.catch(function(erro){
    console.log(erro)
})