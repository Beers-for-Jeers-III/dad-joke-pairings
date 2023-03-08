// curl -H "Accept: application/json" https://icanhazdadjoke.com/
// var jokeApiUrl = 'https://api.humorapi.com/jokes/search?number=1&include-tags=dad&api-key=e4618d46550a4776901fb44e793e790e';
var breweryApiUrl = 'https://api.openbrewerydb.org/breweries?limit=1by_city=Atlanta';

function firstCallAttempt(){
    fetch(breweryApiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log("brewery name", data[0].name);
            for (var i = 0; i < data.length; i++) {
            
                

            }
        });

    }
firstCallAttempt();

// searchInput.addEventListener("submit", (event) => {
//     const { value } = event.target;