"use strict";

let cats = require('./cats');
let dom = require('./dom');

//submit button
$("#submit").click((event) => {
  event.preventDefault();
  //get number of cats in "catzz"
  let numberOfCats =  $('#catzz').val();
  //put number into data api
  cats.catLoad(numberOfCats);
  switchButtons();
});

const switchButtons = () => {
//hide input
$("#catzz").addClass("hidden");
$("#submit").addClass("hidden");
//new remove button
$("#disabledOnes").removeClass("hidden");
};

//remove button
$("#disabledOnes").click(() => {
  event.preventDefault();
  let disabledCats = $(".disabled-cat");
  $(".disabled-cat").parent().parent().addClass('hidden');
});

module.exports = {};
