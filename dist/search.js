"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var searchFormElement = document.querySelector('#searchForm');
  var inputElement = searchFormElement.querySelector('input');
  searchFormElement.addEventListener('submit', function (event) {
    return searchFunction(event);
  });

  var searchFunction = function searchFunction(event) {
    var articles = document.querySelectorAll('.Card');
    event.preventDefault();

    if (inputElement.value) {
      var search = inputElement.value.toLocaleLowerCase();
      articles.forEach(function (article) {
        var articleText = article.innerText.toLocaleLowerCase();
        var articleSection = article.getAttribute('section');
        var articleSubsection = article.getAttribute('subsection');

        if (!articleText.includes(search) && !articleSection.includes(search) && !articleSubsection.includes(search)) {
          article.classList.add('hidden');
        }
      });
    } else {
      articles.forEach(function (article) {
        return article.classList.remove('hidden');
      });
    }
  };
});