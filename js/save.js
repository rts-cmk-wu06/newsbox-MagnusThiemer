window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#categoriesList');
    let savedArticles = [];

    if(localStorage.getItem('savedArticles')){
        savedArticles = JSON.parse(localStorage.getItem('savedArticles'));
    }

    container.addEventListener('click', event => {
        if(event.target.classList.contains('card__save-button')){
            save(event.target.parentNode.id)
        } else if (event.target.classList.contains('card__save-button-icon')){
            save(event.target.parentNode.parentNode.id)
        }
    })

    function save(elementId){
        let article = document.querySelector(`#${elementId}`);

        let articleObject = {
            id: article.id,
            section: article.getAttribute('section'),
            subsection: article.getAttribute('subsection'),
            parentId: article.parentNode.id,
            class: article.classList[0],
            innerHTML: article.innerHTML
        }

        savedArticles.push(articleObject);

        localStorage.setItem('savedArticles', JSON.stringify(savedArticles));

        article.classList.add('animate__animated', 'animate__fadeOutDown', 'animate__fast');
        setTimeout(() => {
            article.style.height = '0';
            article.style.padding = '0'
        }, 400)
        setTimeout(() => {
            article.parentNode.removeChild(article);
        }, 800)

    }
})