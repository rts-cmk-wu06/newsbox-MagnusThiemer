"use strict";

window.addEventListener('DOMContentLoaded', function () {
  /*     let coordinateStart;
  
      document.addEventListener('touchstart', event => {
          coordinateStart = event;
          console.log(coordinateStart);
      }); */
  var pStart = {
    x: 0,
    y: 0
  };
  var pStop = {
    x: 0,
    y: 0
  };
  var refreshElement = document.querySelector('#refreshElement');
  var refreshSpinnerElement = document.querySelector('#refreshSpinnerElement');

  function swipeStart(e) {
    if (typeof e["targetTouches"] !== "undefined") {
      var touch = e.targetTouches[0];
      pStart.x = touch.screenX;
      pStart.y = touch.screenY;
    } else {
      pStart.x = e.screenX;
      pStart.y = e.screenY;
    }
  }

  function swipeEnd(e) {
    if (typeof e["changedTouches"] !== "undefined") {
      var touch = e.changedTouches[0];
      pStop.x = touch.screenX;
      pStop.y = touch.screenY;
    } else {
      pStop.x = e.screenX;
      pStop.y = e.screenY;
    }

    swipeCheck();
  }

  function swipeCheck() {
    var changeY = pStart.y - pStop.y;
    var changeX = pStart.x - pStop.x;

    if (isPullDown(changeY, changeX) && window.scrollY === 0) {
      /*         alert("Swipe Down!"); */
      refreshElement.style.height = '4rem';
      refreshSpinnerElement.style.transform = 'rotate(365deg)';
      setTimeout(function () {
        refreshElement.style.height = '0';
        refreshSpinnerElement.style.transform = 'rotate(0)';
      }, 1000);
    }
  }

  function swipeMove() {}

  ;

  function isPullDown(dY, dX) {
    // methods of checking slope, length, direction of line created by swipe action
    return dY < 0 && (Math.abs(dX) <= 100 && Math.abs(dY) >= 300 || Math.abs(dX) / Math.abs(dY) <= 0.3 && dY >= 60);
  }

  document.addEventListener("touchstart", function (e) {
    swipeStart(e);
  }, false);
  document.addEventListener("touchend", function (e) {
    swipeEnd(e);
  }, false);
});