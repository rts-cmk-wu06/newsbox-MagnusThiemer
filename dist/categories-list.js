"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var categories = ['world', 'science', 'sports', 'business', 'arts'];
  generateNewsArticles(categories);

  function generateNewsArticles(array) {
    array.forEach(function (category) {
      var url = "https://api.nytimes.com/svc/topstories/v2/".concat(category, ".json?api-key=GJ1TlurjYAYhgVBgJNPPGnQ5rr9rNkm7");
      axios.get(url).then(function (data) {
        var parentContainer = document.querySelector("#".concat(category, "NewsUlElement"));
        var newsArray = data.data.results;
        newsArray.forEach(function (newsObject) {
          if (newsObject.section) {
            var li = document.createElement('li');
            li.classList.add('Card');
            li.id = newsObject.short_url.replace('https://nyti.ms/', 'id_');
            li.setAttribute('section', newsObject.section);
            li.setAttribute('subsection', newsObject.subsection);
            var saveButtonContainer = document.createElement('div');
            saveButtonContainer.classList.add('card__save-button', 'flex-row', 'center', 'align-center');
            var deleteIcon = document.createElement('i');
            deleteIcon.classList.add('far', 'fa-hdd', 'card__save-button-icon');
            saveButtonContainer.appendChild(deleteIcon);
            li.appendChild(saveButtonContainer);
            var a = document.createElement('a');
            a.href = newsObject.url;
            a.classList.add('flex-row', 'align-center');
            var imgContainer = document.createElement('div');
            imgContainer.classList.add('card__img-container');
            imgContainer.style.background = 'linear-gradient(0deg, rgba(110,140,160,1) 0%, rgba(135,188,191,1) 100%)';
            var img = document.createElement('img');

            if (newsObject.multimedia) {
              var imageUrl = newsObject.multimedia[0].url;
              img.src = imageUrl;
              imgContainer.appendChild(img);
            }

            var article = document.createElement('article');
            var headline = document.createElement('h3');
            var p = document.createElement('p');
            p.textContent = newsObject["abstract"];
            headline.textContent = newsObject.title;
            article.appendChild(headline);
            article.appendChild(p);
            a.appendChild(article);
            a.appendChild(imgContainer);
            li.appendChild(a);
            parentContainer.appendChild(li);
          }
        });

        if (localStorage.getItem('savedArticles')) {
          var savedArticles = JSON.parse(localStorage.getItem('savedArticles'));
          savedArticles.forEach(function (item) {
            return removeSavedArticles(item);
          });
        }

        function removeSavedArticles(item) {
          if (document.querySelector("#".concat(item.id))) {
            var deleteItem = document.querySelector("#".concat(item.id));
            deleteItem.parentNode.removeChild(deleteItem);
          }
        }
      });
    });
  }
  /* SWIPE DOWN TO REFRESH PAGE */


  var pStart = {
    x: 0,
    y: 0
  };
  var pStop = {
    x: 0,
    y: 0
  };
  var refreshElement = document.querySelector('#refreshElement');
  var refreshSpinnerElement = document.querySelector('#refreshSpinnerElement');

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
      setTimeout(function () {
        refreshElement.style.height = '0';
        refreshSpinnerElement.style.transform = 'rotate(0)';
      }, 1000);
    }
  }

  function isPullDown(dY, dX) {
    // methods of checking slope, length, direction of line created by swipe action
    return dY < 0 && (Math.abs(dX) <= 100 && Math.abs(dY) >= 300 || Math.abs(dX) / Math.abs(dY) <= 0.3 && dY >= 60);
  }

  document.addEventListener("touchstart", function (e) {
    swipeStart(e);
  }, false);
  document.addEventListener("touchend", function (e) {
    swipeEnd(e);
  }, false);
});