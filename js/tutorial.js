window.addEventListener('DOMContentLoaded', () => {
    localStorage.clear();
    const times = 20;
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

        loopFunctionClick(iToggle, i);
        let pToggleDescription = document.createElement('p');
        pToggleDescription.classList.add('tutorial__descriptionToggle')
        pToggleDescription.textContent = 'Show and hide news categories';

        tutorialDiv.appendChild(iToggle);
        tutorialDiv.appendChild(pToggleDescription);
        tutorialDiv.appendChild(p);

        document.body.appendChild(tutorialDiv);
    };
    function swipeToSaveTutorial(){
        let skipButton = document.querySelector('#skipButtonElement');
        let container = document.querySelector('.tutorial__container');
        document.querySelector('.tutorial__descriptionToggle').remove();
        document.querySelector('.tutorial__toggle').remove();

        let iSwipe = document.createElement('i');
        iSwipe.classList.add('tutorial__swipe', 'fas', 'fa-hand-pointer', 'animate__animated');

        let i = 0;
        loopFunctionSwipe(iSwipe, i);

        let pSwipeDescription = document.createElement('p');
        pSwipeDescription.classList.add('tutorial__descriptionSwipe');
        pSwipeDescription.textContent = 'Swipe to save articles to archive'
        container.appendChild(iSwipe);
        container.appendChild(pSwipeDescription);

        skipButton.addEventListener('click', () => swipeToUpdateTutorial())
    }
    function swipeToUpdateTutorial(){
        let skipButton = document.querySelector('#skipButtonElement');
        let container = document.querySelector('.tutorial__container');
        document.querySelector('.tutorial__swipe').remove();
        document.querySelector('.tutorial__descriptionSwipe').remove();

        let iSwipeDown = document.createElement('i');
        iSwipeDown.classList.add('tutorial__swipeDown', 'fas', 'fa-hand-pointer', 'animate__animated');

        let i = 0;
        loopFunctionSwipeDown(iSwipeDown, i);

        let pSwipeDownDescription = document.createElement('p');
        pSwipeDownDescription.classList.add('tutorial__descriptionSwipeDown');
        pSwipeDownDescription.textContent = 'Swipe down to refresh feed';
        container.appendChild(iSwipeDown);
        container.appendChild(pSwipeDownDescription);
        skipButton.addEventListener('click', () => archiveButtonTutorial());
    }
    function archiveButtonTutorial(){
        let skipButton = document.querySelector('#skipButtonElement');
        let container = document.querySelector('.tutorial__container');
        document.querySelector('.tutorial__descriptionSwipeDown').remove();
        document.querySelector('.tutorial__swipeDown').remove();

        let pArchiveDescription = document.createElement('p');
        pArchiveDescription.classList.add('tutorial__descriptionArchive');
        pArchiveDescription.textContent = 'View saved articles';

        let iArchive = document.createElement('i');
        iArchive.classList.add('tutorial__archive', 'fas', 'fa-hand-pointer', 'animate__animated');
        let i = 0;
        loopFunctionClick(iArchive, i);

        container.appendChild(pArchiveDescription);
        container.appendChild(iArchive);

        skipButton.addEventListener('click', () => settingsButtonTutorial())
    }
    function settingsButtonTutorial(){
        let skipButton = document.querySelector('#skipButtonElement');
        let container = document.querySelector('.tutorial__container');
        document.querySelector('.tutorial__archive').remove();
        document.querySelector('.tutorial__descriptionArchive').remove();

        let pSettingsDescription = document.createElement('p');
        pSettingsDescription.classList.add('tutorial__descriptionSettings');
        pSettingsDescription.textContent = 'Manage personal settings';

        let iSettings = document.createElement('i');
        iSettings.classList.add('tutorial__settings', 'fas', 'fa-hand-pointer', 'animate__animated');
        let i = 0;
        loopFunctionClick(iSettings, i);

        container.appendChild(pSettingsDescription);
        container.appendChild(iSettings);

        skipButton.addEventListener('click', () => {
            document.querySelector('.tutorial__container').remove()
            document.querySelector('#tutorialScriptElement').src = '';
        })
    }


    function loopFunctionClick(element, i){
        setTimeout(function(){
            i++;
            element.style.transform = 'scale(0.6)';
            setTimeout(function(){element.style.transform = 'scale(1)'}, 500);
            if(i < times){
                loopFunctionClick(element, i);
            }
        }, 1000)
    };
    function loopFunctionSwipeDown(element, i){
        setTimeout(function(){
            i++;
            element.style.transform = 'translateY(5rem)';
            setTimeout(function(){element.style.transform = 'translateY(0)'}, 500);
            if(i < times){
                loopFunctionSwipeDown(element, i);
            }
        }, 1000)
    }
    function loopFunctionSwipe(element, i){
        setTimeout(function(){
            i++;
            element.style.transform = 'translateX(-5rem)';
            setTimeout(function(){element.style.transform = 'translateX(0)'}, 500);
            if(i < times){
                loopFunctionSwipe(element, i);
            }
        }, 1000)
    }

})