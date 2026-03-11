const lista = document.querySelector(".lista-produtos") // 

const cafe = [

    {
        nome: "Espresso",
        descricao: "Café concentrado y aromático",
        proco: "3,50",
        img: "/assents/espresso.jpg"
    },

    {
        nome: "Cappucino",
        descricao: "Espresso con leche vaporizada y espuma",
        preco: "$4.50",
        img: "/assents/cappuccino.jpg"
    },

    {
        nome: "Café helado",
        descricao: "Refrescante café frio con hielo",
        preco: "$5.00",
        img: "/assents/café helado.jpg"
    }

]

const comidas = [

    {
        nome: "Hamburguesa",
        descricao: "Carne jugosa con queso y pan artesnal",
        preco: "$15.00",
        img: "/assents/hamburguer.webp"

    },

    {
        nome: "Pizza",
        descricao: "Pizza guestosa con mussarela",
        preco: "$55.00",
        img: "/assents/pizza.webp"

    },

    {
        nome: "Risoto",
        descricao: "risoto de camarono",
        preco: "$19.00",
        img: "/assents/risto.webp"

    }

]

function mostrarProdutos(produtos){

    lista.innerHTML = ""

produtos.array.forEach(produto => {

    lista.innerHTML += `

<div class="produto">

<img class="imagem-produto" src="${produto.img}" alt="">

<div class="informacao-produto">

<p class="titulo-produto">${produto.nome}</p>

<p class="subtitulo-produto">${produto.descricao}</p>

</div>

<div class="preco-e-btn">

<p class="preco-produto">${produto.preco}</p>

<button class="btn-produto">

<i class="bi bi-cart"></i>
`

})
}

document.querySelector(".btn02-produtos").addEventListener("click", () => {

    mostrarProdutos(cafe)

})


document.querySelector(".btn03-produtos").addEventListener("click", () => {

    mostrarProdutos(comidas)

})