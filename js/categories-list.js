
window.addEventListener('DOMContentLoaded', () => {
    let categories = [/* 'world', 'health', 'sports',  */'business'/* , 'travel' */];
    let visibleCategories;
    const categoriesListElement = document.querySelector('#categoriesList');

    if(localStorage.getItem('visibleCategories')){
        visibleCategories = JSON.parse(localStorage.getItem('visibleCategories'))
    }

    categories.forEach(category => {
        axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=GJ1TlurjYAYhgVBgJNPPGnQ5rr9rNkm7`)
        .then(data => {  
            let parentContainer = document.querySelector(`#${category}NewsUlElement`);
            let newsArray = data.data.results;
            newsArray.forEach(newsObject => {
                console.log(newsObject.url);
                /* console.log(newsObject); */
                let li = document.createElement('li');
                li.classList.add('Card')

                let deleteButtonContainer = document.createElement('div');
                deleteButtonContainer.classList.add('card__save-button', 'flex-row', 'center', 'align-center');
                let deleteIcon = document.createElement('i');
                deleteIcon.classList.add('far', 'fa-hdd');
                deleteButtonContainer.appendChild(deleteIcon);
                li.appendChild(deleteButtonContainer);

                let a = document.createElement('a');
                a.href = newsObject.url;
                a.classList.add('flex-row', 'align-center');
                let imgContainer = document.createElement('div');
                imgContainer.classList.add('card__img-container')
                let img = document.createElement('img');
                img.src = newsObject.multimedia[0].url;
                let article = document.createElement('article');
                let headline = document.createElement('h3');
                let p = document.createElement('p');
                p.textContent = newsObject.abstract;
                headline.textContent = newsObject.title;
                console.log(newsObject);

                imgContainer.appendChild(img);
                article.appendChild(headline)
                article.appendChild(p);

                a.appendChild(article)
                a.appendChild(imgContainer);
                li.appendChild(a);
                parentContainer.appendChild(li)

            })
        });
    })
})