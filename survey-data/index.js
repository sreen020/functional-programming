console.log("script loaded");

const surveyData = data;
let columnName = "huisDieren";
let answerList = getAnswersForQuestion(surveyData, columnName);
var chosenData;

var amountOfCats = 0;
var amountOfDogs = 0;

getSpecificData();

// returns all answers for the question from var: columnName
function getAnswersForQuestion(data, answer) {
  if (data.length < 1) {
    return console.log("There is no data");
  }

  chosenData = surveyData.map((answer) => answer[columnName].toLowerCase());
  return;
}

function getSpecificData() {
  let catCounter = 0;
  let dogCounter = 0;

  let catArray = [];
  let dogArray = [];

  const conditionOne = ["kat", "katten", "poes"];
  const conditionTwo = ["hond", "teckel", "chihuahua", "Hont"];

  for (key in chosenData) {
    if (conditionOne.some((element) => chosenData[key].includes(element))) {
      catCounter++;
      catArray.push(chosenData[key]);
    } else if (
      conditionTwo.some((element) => chosenData[key].includes(element))
    ) {
      dogCounter++;
      dogArray.push(chosenData[key]);
    }
  }
  domManipulation(catArray, dogArray);
}

function domManipulation(amountOfCats, amountOfDogs) {
  var catContainer = document.getElementById("cat-container");
  var dogContainer = document.getElementById("dog-container");

  for (var i = 0; i < amountOfCats.length; i++) {
    var catImg = document.createElement("img");
    catImg.src = "img/cat.png";
    catContainer.appendChild(catImg);
  }

  for (var i = 0; i < amountOfDogs.length; i++) {
    var dogImg = document.createElement("img");
    dogImg.src = "img/dog.png";
    dogContainer.appendChild(dogImg);
  }
}
