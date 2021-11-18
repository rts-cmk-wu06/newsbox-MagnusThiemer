
window.addEventListener('DOMContentLoaded', () => {
    let categories = ['world'/* , 'science', 'sports', 'business', 'arts' */];
    let visibleCategories;
    const categoriesListElement = document.querySelector('#categoriesList');

    if(localStorage.getItem('visibleCategories')){
        visibleCategories = JSON.parse(localStorage.getItem('visibleCategories'))
    }

    categories.forEach(category => {
        let url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=GJ1TlurjYAYhgVBgJNPPGnQ5rr9rNkm7`
        axios.get(url)
        .then(data => {  
            let parentContainer = document.querySelector(`#${category}NewsUlElement`);
            let newsArray = data.data.results;
            newsArray.forEach(newsObject => {
                if(newsObject.section){
                    let li = document.createElement('li');
                    li.classList.add('Card')
                    li.id = newsObject.short_url.replace('https://nyti.ms/', 'id_');
    
                    let saveButtonContainer = document.createElement('div');
                    saveButtonContainer.classList.add('card__save-button', 'flex-row', 'center', 'align-center');
                    let deleteIcon = document.createElement('i');
                    deleteIcon.classList.add('far', 'fa-hdd', 'card__save-button-icon');
                    saveButtonContainer.appendChild(deleteIcon);
                    li.appendChild(saveButtonContainer);
    
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
    
                    imgContainer.appendChild(img);
                    article.appendChild(headline)
                    article.appendChild(p);
    
                    a.appendChild(article)
                    a.appendChild(imgContainer);
                    li.appendChild(a);
                    parentContainer.appendChild(li)
                }

            })
        });
    })
})