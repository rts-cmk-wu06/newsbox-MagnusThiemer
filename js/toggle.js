window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#categoriesList');
    const categoriesList = document.querySelectorAll('.categories__container')
    categoriesList.forEach(element => {
        element.addEventListener('click', event => {
            let eventTarget = element.id;
            let ulElement = document.querySelector(`#${eventTarget}UlElement`);
            ulElement.classList.toggle('hidden');
            element.querySelector('i').classList
        })
    })
})