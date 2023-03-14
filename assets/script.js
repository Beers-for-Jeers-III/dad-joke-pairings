//variables that will be used in this app
var userInput = "";
var userValue = document.querySelector("#user-value");
var searchInput = document.querySelector("#userForm");
var breweryApiUrl = 'https://api.openbrewerydb.org/breweries?limit=1&by_city=' + userInput
var infoBox = document.querySelector("#info-box");

//if statements that will write localStorage data if it's not null
if (localStorage.getItem("breweryString") != null) {
  var savedBrew = document.createElement("p");
  var savedBrewContent = document.createTextNode(localStorage.getItem("breweryString"));
  savedBrew.appendChild(savedBrewContent);
  infoBox.appendChild(savedBrew);
}
if (localStorage.getItem("jokeString") != null) {
  var savedJoke = document.createElement("p");
  var savedJokeContent = document.createTextNode(localStorage.getItem("jokeString"));
  savedJoke.appendChild(savedJokeContent);
  infoBox.appendChild(savedJoke);
}

//this function will make the URL from user input that will be needed for the brewery API call.
function urlMaker() {
  var userInput = userValue.value;
  var breweryApiUrl = 'https://api.openbrewerydb.org/breweries?limit=1&by_city=' + userInput
  console.log("after revaluing", breweryApiUrl);
  return breweryApiUrl;
}

//this function calls the brewery api and appends the brewery data to the page
function firstCallAttempt (breweryApiUrl) {
  //console.log(breweryApiUrl);
  fetch(breweryApiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function (data) {
      //console.log("brewery name", data[0].name);
      var brewName = document.createElement("p");
      var objectLength = Object.keys(data).length
      var rando = Math.floor(Math.random() * objectLength);
      var brewContent = document.createTextNode(data[rando].name);
      brewName.setAttribute("id", "brewElement");
      brewName.appendChild(brewContent);
      infoBox.appendChild(brewName);
      localStorage.setItem("breweryString", data[rando].name);
      var savedDataBrew = localStorage.getItem("breweryString");
      document.querySelector("#brewElement").innerHTML = savedDataBrew;

    }
)};

//this function calls the joke api and appends the joke to the page
function getBadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept:"application/json"
    }
  })
  .then(function(response) {
    return response.json();
})
  .then(function (data) {
    console.log(data)
    var joke = data.joke;
    var jokeElement = document.createElement("p");
    jokeElement.setAttribute("id", "jokeElement");
    var jokeContent = document.createTextNode(joke);
    jokeElement.appendChild(jokeContent);
    infoBox.appendChild(jokeElement);
    localStorage.setItem("jokeString", joke);
    var savedDataJoke = localStorage.getItem("jokeString");
    document.querySelector("#jokeElement").innerHTML = savedDataJoke;
})
}

//this is calls the earlier functions in the script
searchInput.addEventListener("submit", function (event) {
    event.preventDefault();
    var url = urlMaker();
    firstCallAttempt(url);
    getBadJoke()
});