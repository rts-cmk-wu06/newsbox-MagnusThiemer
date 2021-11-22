window.addEventListener('DOMContentLoaded', () => {
    let darkModeOn = false;
    if(localStorage.getItem('darkModeOn')){
        darkModeOn = JSON.parse(localStorage.getItem('darkModeOn'));
    };
    const darkModeButtonElement = document.querySelector('#darkModeButton');
    darkModeButtonElement.addEventListener('click', () => toggleDarkMode());

    const toggleDarkMode = () => {
        if(darkModeOn){
            darkModeOn = false;
            localStorage.setItem('darkModeOn', JSON.stringify(darkModeOn));
            console.log(darkModeOn);
        } else {
            darkModeOn = true;
            localStorage.setItem('darkModeOn', JSON.stringify(darkModeOn));
            console.log(darkModeOn);
        }
    }

    const darkModeOnFunction = () => {
        
    }
})