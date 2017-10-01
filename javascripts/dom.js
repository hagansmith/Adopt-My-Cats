"use strict";

const domBuilder = (catData) => {
let finalString = "";
for (let i = 0; i < catData.length; i++) {
  let string = "";
  string +=   `<div class="cat-card col-md-3">`;
  string +=     `<div class="image-container">`;
  string +=       `<img src="${catData[i].imageUrl}">`;
  string +=     `</div>`;
  string +=     `<div class="description-container">`;
  string +=      `<h3> ${catData[i].name} </h3>`;
  string +=       `<p> Color: ${catData[i].color} </p>`;
  string +=       `<p> Skills: ${catData[i].specialSkill
    } </p>`;
  if (`${catData[i].numberOfToes}` < 10) {
    string +=       `<p class="disabled-cat"> Toes: ${catData[i].numberOfToes} </p>`;
  } else {
    string +=       `<p class="cat"> Toes: ${catData[i].numberOfToes} </p>`;
  }
  string +=     `</div>`;
  string +=   `</div>`;
  finalString += string;
}
writeToDom(finalString);
};

const writeToDom = (bigString) => {
  $ ('#catCollection').html(bigString);
};

 module.exports = {domBuilder};
