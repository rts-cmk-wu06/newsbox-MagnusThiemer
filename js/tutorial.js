window.addEventListener('DOMContentLoaded', () => {
    localStorage.clear();
    if(!localStorage.getItem('isReturnVisitor')){
        /* only runs this code for first time visitors */
        localStorage.setItem('isReturnVisitor', true);

        const body = document.querySelector('body');
        categoryToggleTutorial();
    }
    function categoryToggleTutorial(){
        let container = document.querySelector('.categories__container');
        let arrow = container.querySelector('.arrow');
        let tutorialDiv = document.createElement('div');
        let i = document.createElement('i');
        let p = document.createElement('p');

        tutorialDiv.classList.add('tutorial__container')
        i.classList.add('far', 'fa-hand-pointer');
        p.classList.add('highlight__p');
        p.textContent = 'Show and hide news categories';
        p.onclick = 'none';
        i.onclick = 'none';
        i.classList.add('animate__animated', 'animate__zoomOut');
        setTimeout(() => {
            i.classList.remove('animate__zoomOut');
        }, 200)
        tutorialDiv.appendChild(i);
        tutorialDiv.appendChild(p);
        tutorialDiv.addEventListener('click', event => event.target.parentNode.removeChild(event.target))
/*         tutorialDiv.addEventListener('click', () => console.log('hello')) */
        container.appendChild(tutorialDiv);
    }
})