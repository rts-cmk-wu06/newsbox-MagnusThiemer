"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var categories = ['world'
  /* , 'health', 'sports', 'business', 'travel' */
  ];
  var visibleCategories;
  var categoriesListElement = document.querySelector('#categoriesList');

  if (localStorage.getItem('visibleCategories')) {
    visibleCategories = JSON.parse(localStorage.getItem('visibleCategories'));
  }

  categories.forEach(function (category) {
    axios.get("https://api.nytimes.com/svc/topstories/v2/".concat(category, ".json?api-key=GJ1TlurjYAYhgVBgJNPPGnQ5rr9rNkm7")).then(function (data) {
      var parentContainer = document.querySelector("#".concat(category, "NewsUlElement"));
      var newsArray = data.data.results;
      newsArray.forEach(function (newsObject) {
        /* console.log(newsObject); */
        var li = document.createElement('li');
        li.classList.add('Card');
        var deleteButtonContainer = document.createElement('div');
        var deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash');
        deleteButtonContainer.appendChild(deleteIcon);
        li.appendChild(deleteButtonContainer);
        var a = document.createElement('a');
        var imgContainer = document.createElement('div');
        imgContainer.classList.add('card__img-container');
        var img = document.createElement('img');
        img.src = newsObject.multimedia[0].url;
        console.log(newsObject.multimedia[0].url);
        var article = document.createElement('article');
        var headline = document.createElement('h3');
        headline.textContent = newsObject.title;
        imgContainer.appendChild(img);
        article.appendChild(headline);
        a.appendChild(imgContainer);
        a.appendChild(article);
        li.appendChild(a);
        parentContainer.appendChild(li);
      });
    });
  });
});