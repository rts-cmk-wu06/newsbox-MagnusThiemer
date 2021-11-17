"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var categories = ['world', 'science', 'sports', 'business', 'arts'];
  var visibleCategories;
  var categoriesListElement = document.querySelector('#categoriesList');

  if (localStorage.getItem('visibleCategories')) {
    visibleCategories = JSON.parse(localStorage.getItem('visibleCategories'));
  }

  categories.forEach(function (category) {
    var url = "https://api.nytimes.com/svc/topstories/v2/".concat(category, ".json?api-key=GJ1TlurjYAYhgVBgJNPPGnQ5rr9rNkm7");
    axios.get(url).then(function (data) {
      console.log(category);
      var parentContainer = document.querySelector("#".concat(category, "NewsUlElement"));
      var newsArray = data.data.results;
      newsArray.forEach(function (newsObject) {
        if (newsObject.section) {
          console.log(newsObject);
          var li = document.createElement('li');
          li.classList.add('Card');
          var deleteButtonContainer = document.createElement('div');
          deleteButtonContainer.classList.add('card__save-button', 'flex-row', 'center', 'align-center');
          var deleteIcon = document.createElement('i');
          deleteIcon.classList.add('far', 'fa-hdd');
          deleteButtonContainer.appendChild(deleteIcon);
          li.appendChild(deleteButtonContainer);
          var a = document.createElement('a');
          a.href = newsObject.url;
          a.classList.add('flex-row', 'align-center');
          var imgContainer = document.createElement('div');
          imgContainer.classList.add('card__img-container');
          var img = document.createElement('img');
          img.src = newsObject.multimedia[0].url;
          var article = document.createElement('article');
          var headline = document.createElement('h3');
          var p = document.createElement('p');
          p.textContent = newsObject["abstract"];
          headline.textContent = newsObject.title;
          imgContainer.appendChild(img);
          article.appendChild(headline);
          article.appendChild(p);
          a.appendChild(article);
          a.appendChild(imgContainer);
          li.appendChild(a);
          parentContainer.appendChild(li);
        }
      });
    });
  });
});