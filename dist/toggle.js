"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var categoriesList = document.querySelectorAll('.categories__container');
  categoriesList.forEach(function (element) {
    element.addEventListener('click', function (event) {
      var eventTarget = element.id;
      var ulElement = document.querySelector("#".concat(eventTarget, "UlElement"));
      ulElement.classList.toggle('hidden');
      var icon = element.querySelector('.arrow');

      if (icon.classList.contains('fa-chevron-down')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
      } else {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
      }
    });
  });
});