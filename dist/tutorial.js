"use strict";

window.addEventListener('DOMContentLoaded', function () {
  localStorage.clear();

  if (!localStorage.getItem('isReturnVisitor')) {
    /* only runs this code for first time visitors */
    localStorage.setItem('isReturnVisitor', true);
    var body = document.querySelector('body');
    categoryToggleTutorial();
  }

  function categoryToggleTutorial() {
    var container = document.querySelector('.categories__container');
    var arrow = container.querySelector('.arrow');
    var tutorialDiv = document.createElement('div');
    var i = document.createElement('i');
    var p = document.createElement('p');
    tutorialDiv.classList.add('tutorial__container');
    i.classList.add('far', 'fa-hand-pointer');
    p.classList.add('highlight__p');
    p.textContent = 'Show and hide news categories';
    p.onclick = 'none';
    i.onclick = 'none';
    i.classList.add('animate__animated', 'animate__zoomOut');
    setTimeout(function () {
      i.classList.remove('animate__zoomOut');
    }, 200);
    tutorialDiv.appendChild(i);
    tutorialDiv.appendChild(p);
    tutorialDiv.addEventListener('click', function (event) {
      return event.target.parentNode.removeChild(event.target);
    });
    /*         tutorialDiv.addEventListener('click', () => console.log('hello')) */

    container.appendChild(tutorialDiv);
  }
});