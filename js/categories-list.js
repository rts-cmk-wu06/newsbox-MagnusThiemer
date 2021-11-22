window.addEventListener('DOMContentLoaded', () => {
    let categories = ['world', 'science', 'sports', 'business', 'arts'];

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
                    li.setAttribute('section', newsObject.section);
                    li.setAttribute('subsection', newsObject.subsection);
    
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

                    if(newsObject.multimedia){
                        img.src = newsObject.multimedia[0].url; 
                        imgContainer.appendChild(img);
                    } else {
                        imgContainer.style.background = 'linear-gradient(0deg, rgba(110,140,160,1) 0%, rgba(135,188,191,1) 100%)';
                    }

                    let article = document.createElement('article');
                    let headline = document.createElement('h3');
                    let p = document.createElement('p');
                    p.textContent = newsObject.abstract;
                    headline.textContent = newsObject.title;
    
                    article.appendChild(headline)
                    article.appendChild(p);
    
                    a.appendChild(article)
                    a.appendChild(imgContainer);
                    li.appendChild(a);
                    parentContainer.appendChild(li)
                }
            });
            if(localStorage.getItem('savedArticles')){
                let savedArticles = JSON.parse(localStorage.getItem('savedArticles'));
                savedArticles.forEach(item => removeSavedArticles(item));
            }
        
            function removeSavedArticles(item){
                if(document.querySelector(`#${item.id}`)){
                    let deleteItem = document.querySelector(`#${item.id}`);
                    deleteItem.parentNode.removeChild(deleteItem)
                }
            }
        });

    })
})