// curl -H "Accept: application/json" https://icanhazdadjoke.com/

function getApi() {
    var requestUrl = 'https://icanhazdadjoke.com/';

    fetch(requestUrl)
        .then(function(response) {
            console.log('response', response)
            return response.json();
        })
}