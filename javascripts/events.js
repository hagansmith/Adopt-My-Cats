"use strict";

let cats = require('./cats');

//submit button
$("#submit").click((event) => {
  event.preventDefault();
  //get number of cats in "catzz"
  let numberOfCats =  $('#catzz').val();
  //put number into data api
  cats.catLoad(numberOfCats);
  switchButtons();
});

//dom function


const switchButtons = () => {
//hide input
$("#catzz").addClass("hidden");
$("#submit").addClass("hidden");
//new button
$("#disabledOnes").removeClass("hidden");
};


module.exports = {};
