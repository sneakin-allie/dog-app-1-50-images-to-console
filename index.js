'use strict';

function getDogImage(quantity) {

  let url = "https://dog.ceo/api/breeds/image/random/" + quantity;

  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {

 for (let i = 0; i < responseJson.message.length; i++) {
    
   console.log(responseJson.message[i]);
    
    // create a new image tag in results
    // $('.results').append(`<img class="results-img" src="${responseJson.message[i]}">`);
 }
    
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let quantity = $( "#quantity" ).val();
    console.log(quantity);
    getDogImage(quantity);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});