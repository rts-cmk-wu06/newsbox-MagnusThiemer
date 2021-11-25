window.addEventListener('DOMContentLoaded', () => {
    const searchFormElement = document.querySelector('#searchForm');
    const inputElement = searchFormElement.querySelector('input');
    const searchClearButtonElement = document.querySelector('.search__clear');
    let articles;
    
    searchFormElement.addEventListener('submit', event => searchFunction(event));
    searchClearButtonElement.addEventListener('click', () => clearSearchFunction())
    
    const searchFunction = event => {
        articles = document.querySelectorAll('.Card');
        event.preventDefault();
        if(inputElement.value){
            let search = inputElement.value.toLocaleLowerCase();
            articles.forEach(article => {
                let articleText = article.innerText.toLocaleLowerCase();
                let articleSection = article.getAttribute('section');
                let articleSubsection = article.getAttribute('subsection');
                if(!articleText.includes(search) && !articleSection.includes(search) && !articleSubsection.includes(search)){
                    article.classList.add('hidden');
                }
            })
        } else {
            articles.forEach(article => article.classList.add('hidden'));
        }
        searchClearButtonElement.style.display = 'block';
    }
    const clearSearchFunction = () => {
        inputElement.value = '';
        articles.forEach(article => article.classList.remove('hidden'));
        searchClearButtonElement.style.display = 'none';
        }
})