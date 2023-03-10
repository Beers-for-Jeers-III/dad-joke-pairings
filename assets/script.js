//variables that will be used in this app
var jokeApiUrl = "https://api.humorapi.com/jokes/search?number=1&include-tags=dad&api-key=e4618d46550a4776901fb44e793e790e";
var userInput = "";
var userValue = document.querySelector("#user-value");
var searchInput = document.querySelector("#userForm");
var breweryApiUrl = 'https://api.openbrewerydb.org/breweries?limit=1&by_city=' + userInput

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
                var brewContent = document.createTextNode(data[0].name);
                brewName.appendChild(brewContent);
                var infoBox = document.querySelector("#info-box");
                infoBox.appendChild(brewName);
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
  var jokeContent = document.createTextNode(joke);
  jokeElement.appendChild(jokeContent);
  var infoBox = document.querySelector("#info-box");
  infoBox.appendChild(jokeElement);
})
}

//this is calls the earlier functions in the script
searchInput.addEventListener("submit", function (event) {
    event.preventDefault();
    var url = urlMaker();
    firstCallAttempt(url);
    getBadJoke()
});
