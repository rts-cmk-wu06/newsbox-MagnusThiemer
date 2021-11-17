"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('#categoriesList');
  var categoriesList = document.querySelectorAll('.categories__container');
  categoriesList.forEach(function (element) {
    element.addEventListener('click', function (event) {
      var eventTarget = element.id;
      var ulElement = document.querySelector("#".concat(eventTarget, "UlElement"));
      ulElement.classList.toggle('hidden');
      element.querySelector('i').classList;
    });
  });
});