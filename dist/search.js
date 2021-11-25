"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var searchFormElement = document.querySelector('#searchForm');
  var inputElement = searchFormElement.querySelector('input');
  var searchClearButtonElement = document.querySelector('.search__clear');
  var articles;
  searchFormElement.addEventListener('submit', function (event) {
    return searchFunction(event);
  });
  searchClearButtonElement.addEventListener('click', function () {
    return clearSearchFunction();
  });

  var searchFunction = function searchFunction(event) {
    articles = document.querySelectorAll('.Card');
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
        return article.classList.add('hidden');
      });
    }

    searchClearButtonElement.style.display = 'block';
  };

  var clearSearchFunction = function clearSearchFunction() {
    inputElement.value = '';
    var hidden = document.querySelectorAll('.hidden');
    hidden.forEach(function (article) {
      return article.classList.remove('hidden');
    });
    searchClearButtonElement.style.display = 'none';
  };
});