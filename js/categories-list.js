window.addEventListener('DOMContentLoaded', () => {
    let categories = ['world', 'science', 'sports', 'business', 'arts'];

    generateNewsArticles(categories);

    function generateNewsArticles(array){
        array.forEach(category => {
            let url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=GJ1TlurjYAYhgVBgJNPPGnQ5rr9rNkm7`
            axios.get(url)
            .then(data => {
                let parentContainer = document.querySelector(`#${category}NewsUlElement`);
                let newsArray = data.data.results;
                newsArray.forEach(newsObject => {
                    if(newsObject.section){
                        let li = document.createElement('li');
                        li.classList.add('Card')
                        li.id = newsObject.short_url.replace('https://nyti.ms/', 'id_');
                        li.setAttribute('section', newsObject.section);
                        li.setAttribute('subsection', newsObject.subsection);
        
                        let saveButtonContainer = document.createElement('div');
                        saveButtonContainer.classList.add('card__save-button', 'flex-row', 'center', 'align-center');
                        let deleteIcon = document.createElement('i');
                        deleteIcon.classList.add('far', 'fa-hdd', 'card__save-button-icon');
                        saveButtonContainer.appendChild(deleteIcon);
                        li.appendChild(saveButtonContainer);
        
                        let a = document.createElement('a');
                        a.href = newsObject.url;
                        a.classList.add('flex-row', 'align-center');
                        let imgContainer = document.createElement('div');
                        imgContainer.classList.add('card__img-container')
                        imgContainer.style.background = 'linear-gradient(0deg, rgba(110,140,160,1) 0%, rgba(135,188,191,1) 100%)';
                        let img = document.createElement('img');
                        
                        if(newsObject.multimedia){
                            let imageUrl = newsObject.multimedia[0].url; 
                            img.src = imageUrl;
                            imgContainer.appendChild(img);
                        }    
                        let article = document.createElement('article');
                        let headline = document.createElement('h3');
                        let p = document.createElement('p');
                        p.textContent = newsObject.abstract;
                        headline.textContent = newsObject.title;
        
                        article.appendChild(headline)
                        article.appendChild(p);
        
                        a.appendChild(article)
                        a.appendChild(imgContainer);
                        li.appendChild(a);
                        parentContainer.appendChild(li)
                    }
                });
                if(localStorage.getItem('savedArticles')){
                    let savedArticles = JSON.parse(localStorage.getItem('savedArticles'));
                    savedArticles.forEach(item => removeSavedArticles(item));
                }
            
                function removeSavedArticles(item){
                    if(document.querySelector(`#${item.id}`)){
                        let deleteItem = document.querySelector(`#${item.id}`);
                        deleteItem.parentNode.removeChild(deleteItem)
                    }
                }
            });
        })
    }

    /* SWIPE DOWN TO REFRESH PAGE */
    let pStart = { x: 0, y: 0 };
    let pStop = { x: 0, y: 0 };
    const refreshElement = document.querySelector('#refreshElement');
    const refreshSpinnerElement = document.querySelector('#refreshSpinnerElement');

    function swipeStart(e) {
    if (typeof e["targetTouches"] !== "undefined") {
        var touch = e.targetTouches[0];
        pStart.x = touch.screenX;
        pStart.y = touch.screenY;
    } else {
        pStart.x = e.screenX;
        pStart.y = e.screenY;
    }
    }

    function swipeEnd(e) {
    if (typeof e["changedTouches"] !== "undefined") {
        var touch = e.changedTouches[0];
        pStop.x = touch.screenX;
        pStop.y = touch.screenY;
    } else {
        pStop.x = e.screenX;
        pStop.y = e.screenY;
    }

    swipeCheck();
    }

    function swipeCheck() {
    var changeY = pStart.y - pStop.y;
    var changeX = pStart.x - pStop.x;
    if (isPullDown(changeY, changeX) && window.scrollY === 0) {
        refreshElement.style.height = '4rem';
        refreshSpinnerElement.style.transform = 'rotate(365deg)';
        generateNewsArticles(categories);
        setTimeout(() => {
            refreshElement.style.height = '0';
            refreshSpinnerElement.style.transform = 'rotate(0)';
        },1000)
        }
    }

    function isPullDown(dY, dX) {
    // methods of checking slope, length, direction of line created by swipe action
    return (
        dY < 0 &&
        ((Math.abs(dX) <= 100 && Math.abs(dY) >= 300) ||
        (Math.abs(dX) / Math.abs(dY) <= 0.3 && dY >= 60))
    );
    }

    document.addEventListener("touchstart", function (e) {
        swipeStart(e);
    }, false
    );
    document.addEventListener("touchend", function (e) {
        swipeEnd(e);
    }, false
    );
})