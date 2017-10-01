"use strict";

let dom = require('./dom');

let catData = [];


//get data from source
//https://random-dogs-api.herokuapp.com/cats/NUMBEROFCATZZZZZ (obviously replacing NUMBEROFCATZZZZZ with the actual number I entered in step 1).
const catLoad = (catVal) => {
$.ajax(`https://random-dogs-api.herokuapp.com/cats/${catVal}`).done((data) => {
  catData = data.cats;
//dom function
  dom.domBuilder(catData);
}).fail((error) => {
  console.log(error);
});
};

 module.exports = {catLoad};
