window.addEventListener('DOMContentLoaded', () => {
    const categoriesList = document.querySelectorAll('.categories__container')
    categoriesList.forEach(element => {
        element.addEventListener('click', event => {
            let eventTarget = element.id;
            let ulElement = document.querySelector(`#${eventTarget}UlElement`);
            ulElement.classList.toggle('hidden');
            let icon = element.querySelector('.arrow');
            if(ulElement.classList.contains('hidden')){
                icon.style.transform = 'rotate(-90deg)'
            } else {
                icon.style.transform = 'rotate(0)'
            }
        })
    })
})