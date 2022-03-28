var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", APIKey);

const URL = "https://api.thedogapi.com/v1/breeds/"

var requestOptions = {
    method: 'GET',
};

const editedURL = URL + 1;

fetch(editedURL, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.log('error', error));
