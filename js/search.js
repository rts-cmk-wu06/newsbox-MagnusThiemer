window.addEventListener('DOMContentLoaded', () => {
    const searchFormElement = document.querySelector('#searchForm');
    const inputElement = searchFormElement.querySelector('input');
    
    searchFormElement.addEventListener('submit', event => searchFunction(event));
    
    const searchFunction = event => {
        const articles = document.querySelectorAll('.Card');
        event.preventDefault();
        if(inputElement.value){
            let search = inputElement.value.toLocaleLowerCase();
            console.log(articles);
            console.log(search);
            articles.forEach(article => {
                let articleText = article.innerText.toLocaleLowerCase();
                let articleSection = article.getAttribute('section');
                let articleSubsection = article.getAttribute('subsection');
                if(!articleText.includes(search) && !articleSection.includes(search) && !articleSubsection.includes(search)){
                    article.classList.add('hidden');
                }
            })
        } else {
            articles.forEach(article => article.classList.remove('hidden'));
        }
    }
})