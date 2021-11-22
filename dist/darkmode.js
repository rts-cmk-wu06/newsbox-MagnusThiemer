"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var darkModeOn = false;

  if (localStorage.getItem('darkModeOn')) {
    darkModeOn = JSON.parse(localStorage.getItem('darkModeOn'));
  }

  ;
  var darkModeButtonElement = document.querySelector('#darkModeButton');
  darkModeButtonElement.addEventListener('click', function () {
    return toggleDarkMode();
  });

  var toggleDarkMode = function toggleDarkMode() {
    if (darkModeOn) {
      darkModeOn = false;
      localStorage.setItem('darkModeOn', JSON.stringify(darkModeOn));
      console.log(darkModeOn);
    } else {
      darkModeOn = true;
      localStorage.setItem('darkModeOn', JSON.stringify(darkModeOn));
      console.log(darkModeOn);
    }
  };

  var darkModeOnFunction = function darkModeOnFunction() {};
});