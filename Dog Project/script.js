var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", APIKey);

const URL = "https://api.thedogapi.com/v1/breeds/"

var requestOptions = {
    method: 'GET',
};

const editedURL = URL;


    fetch(editedURL, requestOptions)
    .then(response => response.json())
    .then(data => {
        renderDogs(data); //Renders data
    })
    .catch(error =>
        console.log(error)) //Catches errors if they arise


function renderDogs(dogs) {

dogs.forEach(dog => {
    console.log(dog.name);

    $('#dogs-div').append(

        `<h3>${dog.name}</h1>`

    )
});

}
