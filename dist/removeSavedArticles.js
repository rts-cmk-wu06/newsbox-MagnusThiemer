"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var savedArticlesToRemove;

  if (localStorage.getItem('savedArticles')) {
    savedArticlesToRemove = JSON.parse(localStorage.getItem('savedArticles'));
    savedArticlesToRemove.forEach(function (item) {
      return removeSavedArticles(item);
    });
  }

  function removeSavedArticles(item) {
    if (document.querySelector("#".concat(item.id))) {
      var deleteItem = document.querySelector("#".concat(item.id));
      console.log(deleteItem);
      deleteItem.parentNode.removeChild(deleteItem);
    }
  }
});