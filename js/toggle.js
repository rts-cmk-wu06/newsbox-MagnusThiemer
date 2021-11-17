window.addEventListener('DOMContentLoaded', () => {
    const categoriesList = document.querySelectorAll('.categories__container')
    categoriesList.forEach(element => {
        element.addEventListener('click', event => {
            let eventTarget = element.id;
            let ulElement = document.querySelector(`#${eventTarget}UlElement`);
            ulElement.classList.toggle('hidden');
            let icon = element.querySelector('.arrow');
            console.log(icon);
            if(icon.classList.contains('fa-chevron-down')){
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right')
            } else {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down')
            }
        })
    })
})