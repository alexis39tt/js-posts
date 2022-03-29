let posts = [{
    'id': 1,
    'autore': {
        'nome': 'Gennaro Esposito',
        'foto': 'https://unsplash.it/300/300?image=28'
    },
    'likes': 45,
    'created': '2022-10-15',
    'media': 'https://unsplash.it/600/400?image=15',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
},
{
    'id': 2,
    'autore': {
        'nome': 'Caloggero Martorana',
        'foto': 'https://unsplash.it/300/300?image=32'
    },
    'likes': 130,
    'created': '2022-10-10',
    'media': 'https://unsplash.it/600/400?image=17',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
},
{
    'id': 3,
    'autore': {
        'nome': 'Renato RanaMarziana',
        'foto': 'https://unsplash.it/300/300?image=16'
    },
    'likes': 2000,
    'created': '2022-10-24',
    'media': 'https://unsplash.it/600/400?image=60',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
},
{
    'id': 4,
    'autore': {
        'nome': 'Mario Maria Mario',
        'foto': null
    },
    'likes': 75,
    'created': '2022-10-26',
    'media': 'https://unsplash.it/600/400?image=5',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
},
{
    'id': 5,
    'autore': {
        'nome': 'Sono Mimmo',
        'foto': 'https://unsplash.it/300/300?image=48'
    },
    'likes': 45,
    'created': '2022-10-03',
    'media': 'https://unsplash.it/600/400?image=96',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
},
{
    'id': 6,
    'autore': {
        'nome': 'Dottoressa Caccavera',
        'foto': 'https://unsplash.it/300/300?image=78'
    },
    'likes': 350,
    'created': '2022-10-05',
    'media': 'https://unsplash.it/600/400?image=14',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper, lacus sit amet rutrum imperdiet, metus ante lacinia neque, et tincidunt ante odio eu massa. Etiam nisi odio, vulputate sed interdum eget, egestas ac augue. '
},
]

let container = document.querySelector("#container")

posts.forEach((elm) => {
    let pp;
    if (elm.autore.foto == null) {
        init = elm.autore.nome.charAt(0) + elm.autore.nome.charAt(1).toUpperCase();
        pp = `<div class="nopic">${init}</div>`;
    }
    else {
        pp = `<img src="${elm.autore.foto}">`;
    }
    container.innerHTML += `
    <div class="post">
        <div class="post-header">
        <div class="post-header-img">
            ${pp}
        </div>
        <div class="post-header-info">
            <p>${elm.autore.nome}</p>
            <p>${elm.created}</p>
        </div>
        </div>
        <div class="post-content">
            <p>${elm.content}</p>
            <img src="${elm.media}">
        </div>
        <div class="post-footer">
            <button class="like"><i class="fa-solid fa-thumbs-up"></i> Mi piace</button>
            <p>Piace a <span>${elm.likes}</span> persone</p>
        </div>
    </div>`
})