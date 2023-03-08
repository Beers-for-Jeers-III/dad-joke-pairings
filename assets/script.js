var jokeApiUrl = "https://api.humorapi.com/jokes/search?number=1&include-tags=dad&api-key=e4618d46550a4776901fb44e793e790e"

function firstCallAttempt() {
    fetch(jokeApiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

firstCallAttempt();