"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var categoriesList = document.querySelectorAll('.categories__container');
  categoriesList.forEach(function (element) {
    element.addEventListener('click', function (event) {
      var eventTarget = element.id;
      var ulElement = document.querySelector("#".concat(eventTarget, "UlElement"));
      ulElement.classList.toggle('hidden');
      var icon = element.querySelector('.arrow');

      if (ulElement.classList.contains('hidden')) {
        icon.style.transform = 'rotate(-90deg)';
      } else {
        icon.style.transform = 'rotate(0)';
      }
    });
  });
});