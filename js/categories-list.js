
window.addEventListener('DOMContentLoaded', () => {
    let categories = ['world'/* , 'health', 'sports', 'business', 'travel' */];
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
                /* console.log(newsObject); */
                let li = document.createElement('li');
                li.classList.add('Card')

                let deleteButtonContainer = document.createElement('div');
                let deleteIcon = document.createElement('i');
                deleteIcon.classList.add('fas', 'fa-trash')
                deleteButtonContainer.appendChild(deleteIcon);
                li.appendChild(deleteButtonContainer);

                let a = document.createElement('a');
                let imgContainer = document.createElement('div');
                imgContainer.classList.add('card__img-container')
                let img = document.createElement('img');
                img.src = newsObject.multimedia[0].url;
                console.log(newsObject.multimedia[0].url);
                let article = document.createElement('article');
                let headline = document.createElement('h3');
                headline.textContent = newsObject.title;

                imgContainer.appendChild(img);
                article.appendChild(headline)

                a.appendChild(imgContainer);
                a.appendChild(article)
                li.appendChild(a);
                parentContainer.appendChild(li)

            })
        });
    })
})