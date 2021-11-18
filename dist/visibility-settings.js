"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('#visibilitySelectorList');
  var visibleCategories = {};

  if (localStorage.getItem('visibleCategories')) {
    visibleCategories = JSON.parse(localStorage.getItem('visibleCategories'));
  } else {
    visibleCategories = {
      world: true,
      science: true,
      sports: true,
      business: true,
      arts: true
    };
  }

  pageLoadVisibilitySettings(visibleCategories);
  container.addEventListener('click', function (event) {
    return toggleVisibility(event);
  });

  function pageLoadVisibilitySettings(object) {
    var keys = Object.keys(object);
    keys.forEach(function (key) {
      var toggle = document.querySelector("#".concat(key)).querySelector('.settings__selector-container');

      if (object[key]) {
        toggle.classList.add('toggle-on');
        toggle.classList.add('flex-end');
      } else {
        toggle.classList.remove('toggle-on');
        toggle.classList.remove('flex-end');
      }
    });
  }

  var toggleVisibility = function toggleVisibility(event) {
    if (event.target.parentNode.parentNode.tagName == 'LI') {
      var category = event.target.parentNode.parentNode.id;

      if (visibleCategories[category]) {
        visibleCategories[category] = false;
        event.target.parentNode.classList.toggle('flex-end');
        event.target.parentNode.classList.toggle('toggle-on');
        localStorage.setItem('visibleCategories', JSON.stringify(visibleCategories));
      } else {
        visibleCategories[category] = true;
        event.target.parentNode.classList.toggle('flex-end');
        event.target.parentNode.classList.toggle('toggle-on');
        localStorage.setItem('visibleCategories', JSON.stringify(visibleCategories));
      }
    }
  };
});