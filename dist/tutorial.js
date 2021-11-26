"use strict";

window.addEventListener('DOMContentLoaded', function () {
  localStorage.clear();
  var times = 7;

  if (!localStorage.getItem('isReturnVisitor')) {
    /* only runs this code for first time visitors */
    localStorage.setItem('isReturnVisitor', true);
    var tutorialContainer;
    categoryToggleTutorial();
  }

  function categoryToggleTutorial() {
    var tutorialDiv = document.createElement('div');
    tutorialDiv.classList.add('tutorial__container', 'flex-row', 'center', 'align-center');
    var p = document.createElement('p');
    p.textContent = 'Skip';
    p.classList.add('tutorial__skip-button');
    p.id = 'skipButtonElement';
    p.addEventListener('click', function () {
      return swipeToSaveTutorial();
    });
    var iToggle = document.createElement('i');
    iToggle.classList.add('tutorial__toggle', 'fas', 'fa-hand-pointer', 'animate__animated');
    var i = 0;

    function loopFunction() {
      setTimeout(function () {
        i++;
        iToggle.style.transform = 'scale(0.8)';
        setTimeout(function () {
          iToggle.style.transform = 'scale(1)';
        }, 500);

        if (i < times) {
          loopFunction();
        }
      }, 4000);
    }

    loopFunction();
    var pToggleDescription = document.createElement('p');
    pToggleDescription.classList.add('tutorial__descriptionToggle');
    pToggleDescription.textContent = 'Show and hide news categories';
    tutorialDiv.appendChild(iToggle);
    tutorialDiv.appendChild(pToggleDescription);
    tutorialDiv.appendChild(p);
    document.body.appendChild(tutorialDiv);
  }

  ;

  function swipeToSaveTutorial() {
    var skipButton = document.querySelectorAll('#skipButtonElement');
    var container = document.querySelector('.tutorial__container');
    document.querySelector('.tutorial__descriptionToggle').remove();
    document.querySelector('.tutorial__toggle').remove();
    var iSwipe = document.createElement('i');
    iSwipe.classList.add('tutorial__swipe', 'fas', 'fa-hand-pointer', 'animate__animated');
    var i = 0;

    function loopFunctionSwipe() {
      setTimeout(function () {
        i++;
        iSwipe.style.transform = 'translateX(-3rem)';
        setTimeout(function () {
          iSwipe.style.transform = 'translateX(0)';
        }, 500);

        if (i < times) {
          loopFunctionSwipe();
        }
      }, 2000);
    }

    loopFunctionSwipe();
    var pSwipeDescription = document.createElement('p');
    pSwipeDescription.classList.add('tutorial__descriptionSwipe');
    pSwipeDescription.textContent = 'Swipe to save articles to archive';
    container.appendChild(iSwipe);
    container.appendChild(pSwipeDescription);
    console.log('hello');
  }
});