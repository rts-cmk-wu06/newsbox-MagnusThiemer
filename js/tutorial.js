window.addEventListener('DOMContentLoaded', () => {
    localStorage.clear();
    const times = 7;
    if(!localStorage.getItem('isReturnVisitor')){
        /* only runs this code for first time visitors */
        localStorage.setItem('isReturnVisitor', true);
        let tutorialContainer;
        
        categoryToggleTutorial();
    }
    function categoryToggleTutorial(){
        let tutorialDiv = document.createElement('div');
        tutorialDiv.classList.add('tutorial__container', 'flex-row', 'center', 'align-center');
        let p = document.createElement('p');
        p.textContent = 'Skip';
        p.classList.add('tutorial__skip-button');
        p.id = 'skipButtonElement'
        p.addEventListener('click', () => swipeToSaveTutorial());
        
        
        let iToggle = document.createElement('i');
        iToggle.classList.add('tutorial__toggle', 'fas', 'fa-hand-pointer', 'animate__animated');

        let i = 0;
        function loopFunction(){
            setTimeout(function(){
                i++;
                iToggle.style.transform = 'scale(0.8)';
                setTimeout(function(){iToggle.style.transform = 'scale(1)'}, 500);
                if(i < times){
                    loopFunction();
                }
            }, 4000)
        }
        loopFunction();
        let pToggleDescription = document.createElement('p');
        pToggleDescription.classList.add('tutorial__descriptionToggle')
        pToggleDescription.textContent = 'Show and hide news categories';

        tutorialDiv.appendChild(iToggle);
        tutorialDiv.appendChild(pToggleDescription);
        tutorialDiv.appendChild(p);

        document.body.appendChild(tutorialDiv);
    };
    function swipeToSaveTutorial(){
        let skipButton = document.querySelectorAll('#skipButtonElement');
        let container = document.querySelector('.tutorial__container');
        document.querySelector('.tutorial__descriptionToggle').remove();
        document.querySelector('.tutorial__toggle').remove();

        let iSwipe = document.createElement('i');
        iSwipe.classList.add('tutorial__swipe', 'fas', 'fa-hand-pointer', 'animate__animated');

        let i = 0;
        function loopFunctionSwipe(){
            setTimeout(function(){
                i++;
                iSwipe.style.transform = 'translateX(-3rem)';
                setTimeout(function(){iSwipe.style.transform = 'translateX(0)'}, 500);
                if(i < times){
                    loopFunctionSwipe();
                }
            }, 2000)
        }
        loopFunctionSwipe();

        let pSwipeDescription = document.createElement('p');
        pSwipeDescription.classList.add('tutorial__descriptionSwipe');
        pSwipeDescription.textContent = 'Swipe to save articles to archive'
        container.appendChild(iSwipe);
        container.appendChild(pSwipeDescription);

        console.log('hello')
    }

})