import { searchApi } from './../js/lookup.js';

$(document).ready(function(){
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    let searchInput = $('#userInput').val();
    let operator = $('input:radio[name=operator]:checked').val();
    let searchResult = searchApi(searchInput, operator);

    searchResult.then(function(response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++){
        if(body.data.length === 0){
          $('#results').text(`<h3>No doctors meet the search citeria</h3>`);
        }else{
          $('#result').append(`<ul><li>First Name: ${response.data[i].profile.first_name}</li></ul>`);
          $('#result').append(`<ul><li>Last Name: ${response.data[i].profile.last_name}</li></ul>`);
          $('#result').append(`<ul><li>Address: ${response.data[i].practices.visit_address.street}, ${response.data[i].practices.visit_address.city}, ${response.data[i].practices.visit_address.state}, ${response.data[i].practices.visit_address.zip}</li></ul>`);
          $('#result').append(`<ul><li>Phone Number: ${response.data[i].practices.phones.number}</li></ul>`);
          $('#result').append(`<ul><li>Accepts new patients: ${response.data[i].practices.accepts_new_patients}</li></ul><br>`);
        }
      }
    }, function(error){
      $('#error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
