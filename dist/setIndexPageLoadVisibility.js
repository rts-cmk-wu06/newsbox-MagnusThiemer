"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var visibleCategories;

  if (localStorage.getItem('visibleCategories')) {
    visibleCategories = JSON.parse(localStorage.getItem('visibleCategories'));
  }

  ;
  setPageLoadVisibility(visibleCategories);

  function setPageLoadVisibility(object) {
    var keys = Object.keys(object);
    keys.forEach(function (key) {
      var ulElement = document.querySelector("#".concat(key, "NewsUlElement"));
      var icon = document.querySelector("#".concat(key, "News")).querySelector('.arrow');

      if (!object[key]) {
        ulElement.classList.add('hidden');
        icon.style.transform = 'rotate(-90deg)';
      }
    });
  }
});