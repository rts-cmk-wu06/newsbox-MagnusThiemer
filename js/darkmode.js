window.addEventListener('DOMContentLoaded', () => {
    let darkModeOn = false;
    let darkModeButtonElement;
    const stylesheet = document.querySelector('#compiledStylesheet');

    if(localStorage.getItem('darkModeOn')){
        darkModeOn = JSON.parse(localStorage.getItem('darkModeOn'));
        console.log(darkModeOn)
        };

    if(document.querySelector('#darkModeButton')){
        darkModeButtonElement = document.querySelector('#darkModeButton');
        darkModeButtonElement.addEventListener('click', () => toggleDarkMode());
    }
    
    darkModeOnFunction();

    function toggleDarkMode(){
        if(darkModeOn){
            darkModeOn = false;
            localStorage.setItem('darkModeOn', JSON.stringify(darkModeOn));
            darkModeOnFunction();
        } else {
            darkModeOn = true;
            localStorage.setItem('darkModeOn', JSON.stringify(darkModeOn));
            darkModeOnFunction();
        }
    }

    function darkModeOnFunction(){
        if(darkModeOn){
            stylesheet.href = './dist/indexDarkMode.css';
        } else {
            stylesheet.href = './dist/index.css';
        }
    }
})