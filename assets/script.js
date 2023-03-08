var jokeApiUrl = "https://api.humorapi.com/jokes/search?number=1&include-tags=dad&api-key=e4618d46550a4776901fb44e793e790e";
var userInput = "";
var userValue = document.querySelector("#user-value");
var searchInput = document.querySelector("#userForm");
var breweryApiUrl = 'https://api.openbrewerydb.org/breweries?limit=1&by_city=' + userInput

// curl -H "Accept: application/json" https://icanhazdadjoke.com/
// var jokeApiUrl = 'https://api.humorapi.com/jokes/search?number=1&include-tags=dad&api-key=e4618d46550a4776901fb44e793e790e';

function urlMaker() {
    var userInput = userValue.value;
    var breweryApiUrl = 'https://api.openbrewerydb.org/breweries?limit=1&by_city=' + userInput
    console.log("after revaluing", breweryApiUrl);
    return breweryApiUrl;
}

function firstCallAttempt (breweryApiUrl) {
    console.log(breweryApiUrl);
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
})
}
searchInput.addEventListener("submit", function (event) {
    event.preventDefault();
    var url = urlMaker();
    firstCallAttempt(url);
    getBadJoke()
});
