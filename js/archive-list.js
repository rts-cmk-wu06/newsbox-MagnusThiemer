window.addEventListener('DOMContentLoaded', () => {
    let savedArticles = JSON.parse(localStorage.getItem('savedArticles'));

    savedArticles.forEach(item => generateArchiveList(item))

    function generateArchiveList(item){
        let li = document.createElement('li');
        li.id = item.id;
        li.classList.add(item.class);
        li.setAttribute('section', item.section);
        li.setAttribute('subsection', item.subsection);
        let innerHTMLRevised = item.innerHTML.replace(
            '<div class=\"card__save-button flex-row center align-center\"><i class=\"far fa-hdd card__save-button-icon\" aria-hidden=\"true\"></i></div>', 
            '<div class=\"card__delete-button flex-row center align-center\"><i class=\"far fa-trash-alt card__delete-button-icon\" aria-hidden=\"true\"></i></div>'
            );
        innerHTMLRevised = innerHTMLRevised.replace('style="transform: translateX(-5rem);', '');
        li.innerHTML = innerHTMLRevised;

        document.querySelector(`#${item.parentId}`).appendChild(li);
    }
})