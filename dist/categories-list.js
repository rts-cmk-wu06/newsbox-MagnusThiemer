"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var categories = ['world'
  /* , 'science', 'sports', 'business', 'arts' */
  ];
  categories.forEach(function (category) {
    var url = "https://api.nytimes.com/svc/topstories/v2/".concat(category, ".json?api-key=GJ1TlurjYAYhgVBgJNPPGnQ5rr9rNkm7");
    axios.get(url).then(function (data) {
      var parentContainer = document.querySelector("#".concat(category, "NewsUlElement"));
      var newsArray = data.data.results;
      newsArray.forEach(function (newsObject) {
        if (newsObject.section) {
          var li = document.createElement('li');
          li.classList.add('Card');
          li.id = newsObject.short_url.replace('https://nyti.ms/', 'id_');
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
          var img = document.createElement('img');

          if (newsObject.multimedia) {
            img.src = newsObject.multimedia[0].url;
            imgContainer.appendChild(img);
          } else {
            imgContainer.style.background = 'linear-gradient(0deg, rgba(110,140,160,1) 0%, rgba(135,188,191,1) 100%)';
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
});