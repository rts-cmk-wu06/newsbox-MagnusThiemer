window.addEventListener('DOMContentLoaded', () => {
    let visibleCategories;

    if(localStorage.getItem('visibleCategories')){
        visibleCategories = JSON.parse(localStorage.getItem('visibleCategories'))
        console.log(visibleCategories)
    };
    setPageLoadVisibility(visibleCategories)
    
    function setPageLoadVisibility(object){
        let keys = Object.keys(object);
        keys.forEach(key => {
            let ulElement = document.querySelector(`#${key}NewsUlElement`);
            let icon = document.querySelector(`#${key}News`).querySelector('.arrow');
            if(!object[key]){
                ulElement.classList.add('hidden');
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            }
        })
    }
})