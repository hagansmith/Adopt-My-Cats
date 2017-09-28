"use strict";

let cats = require('./cats');

//submit button
$("#submit").click((event) => {
  event.preventDefault();
  //get number of cats in "catzz"
  let numberOfCats =  $('#catzz').val();
  //put number into data api
  cats.catLoad(numberOfCats);
});

//dom function

//hide input

//new button

module.exports = {};
