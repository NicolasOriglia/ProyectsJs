//cantidad de noticias que se cargaran c/ vez que se seleccione siguiente

let amountNews = 5; // se mostraran 6
let endPage = amountNews;
let initialPage = 0;
let currentTopic = 'Tecnologia';

let news = {
    'apiKey' : '6d8a3cc6ad024758b96cff9b7232e665',
    fetchNoticias: function(category){
        fetch(
            'https://newsapi.org/v2/everything?q='
            + category +
            '&languaje=es&apiKey='+ this.apiKey
        ).then((response)=> response.json())
        .then((data)=>this.displayNoticias(data));
    },
    displayNoticias: function(data){
        //elimino todo si es que se ha seleccionado un tema nuevo
        if(initialPage === 0){
            document.querySelector('.container__news').textContent = '';
        }
        //cargo las noticias indicadas
        for(i = initialPage; i < endPage; i++){
            const {title} = data.articles[i];
            let h2 = document.createElement('h2');
            h2.textContent = title

            const {urlToImage} = data.articles[i];
            let img = document.createElement('img');
            img.setAttribute('src', urlToImage);

            let infoItem = document.createElement('div');
            infoItem.className = 'info-item';
            const {publishedAt} = data.articles[i];
            let fecha = document.createElement('span');
            date = publishedAt;
            let date = date.split('T')[0].split('-').reverse().join('-');
            fecha.className = 'fecha';
            fecha.textContent = date;

            const{name} = data.articles[i].source;
            let font = document.createElement('span');
            font.className = 'font';
            font.textContent = name;

            infoItem.appendChild(fecha);
            infoItem.appendChild(font);

            const {url} = data.articles[i];

            let item = document.createElement('div');
            item.className = 'item';
            item.appendChild(h2);
            item.appendChild(img);
            item.appendChild(infoItem);
            item.setAttribute('onclick', 'location.href="' + url + '"');
            document.querySelector('.container__news').appendChild(item);
        }
        //agregamos el boton de cargar mas 
        let btnNext = document.createElement('span');
        btnNext.id = 'btnNext';
        btnNext.textContent = 'Ver más';
        btnNext.setAttribute('onclick', 'siguiente()');
        document.querySelector('.container__news').appendChild(btnNext);
    }
}

news.fetchNoticias(currentTopic);