"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('#categoriesList');
  var savedArticles = [];

  if (localStorage.getItem('savedArticles')) {
    savedArticles = JSON.parse(localStorage.getItem('savedArticles'));
  }

  container.addEventListener('click', function (event) {
    if (event.target.classList.contains('card__save-button')) {
      save(event.target.parentNode.id);
    } else if (event.target.classList.contains('card__save-button-icon')) {
      save(event.target.parentNode.parentNode.id);
    }
  });

  function save(elementId) {
    var article = document.querySelector("#".concat(elementId));
    savedArticles.push(article);
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
    article.classList.add('animate__animated', 'animate__fadeOutDown', 'animate__fast');
    setTimeout(function () {
      article.style.height = '0';
      article.style.padding = '0';
    }, 400);
    setTimeout(function () {
      article.parentNode.removeChild(article);
    }, 800);
  }
});