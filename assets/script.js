var jokeApiUrl = "https://api.humorapi.com/jokes/search?number=1&include-tags=dad&api-key=e4618d46550a4776901fb44e793e790e";
var userInput = "";
var userValue = document.querySelector("#user-value");
var searchInput = document.querySelector("#userForm");
var breweryApiUrl = 'https://api.openbrewerydb.org/breweries?limit=1by_city=' + userInput

// curl -H "Accept: application/json" https://icanhazdadjoke.com/
// var jokeApiUrl = 'https://api.humorapi.com/jokes/search?number=1&include-tags=dad&api-key=e4618d46550a4776901fb44e793e790e';

function urlMaker() {
    var userInput = userValue.value;
    var breweryApiUrl = 'https://api.openbrewerydb.org/breweries?limit=1by_city=' + userInput
    console.log("after revaluing", breweryApiUrl);
    var newBrewUrl = breweryApiUrl;
    return newBrewUrl
}

function firstCallAttempt () {
    console.log(newBrewUrl);
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

searchInput.addEventListener("submit", function (event) {
    event.preventDefault();
    urlMaker();
    firstCallAttempt();
});
