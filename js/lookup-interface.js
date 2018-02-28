import { searchApi } from './../js/lookup.js';

$(document).ready(function(){
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    let searchInput = $('#userInput').val();
    let operator = $('input:radio[name=operator]:checked').val();
    let searchResult = searchApi(searchInput, operator);
    $('#results, .fill').empty();
    $('#userInput').val("");
    searchResult.then(function(response) {
      let body = JSON.parse(response);
      console.log(body.data.length);
      for (let i = 0; i < body.data.length; i++){
        if(body.data.length === 0){
          $('#results').text(`<h3>No doctors meet the search citeria</h3>`);
        }else{
          $('#result, table').append(`
                <tbody class=fill>
                  <tr>
                   <td>${body.data[i].profile.first_name}</td>
                   <td>${body.data[i].profile.last_name}</td>
                   <td>${body.data[i].practices[0].visit_address.street},
                     ${body.data[i].practices[0].visit_address.city},
                     ${body.data[i].practices[0].visit_address.state},
                     ${body.data[i].practices[0].visit_address.zip}</td>
                    <td>${body.data[i].practices[0].phones[0].number}}</td>
                    <td>${body.data[i].practices[0].website}</td>
                    <td>${body.data[i].practices[0].accepts_new_patients}</td>
                  </tr>
                </tbody>`);
        //  $('#results').append(`<ul><li>First Name: ${body.data[i].profile.first_name}</li></ul>`);
        //  $('#results').append(`<ul><li>Last Name: ${body.data[i].profile.last_name}</li></ul>`);
        //  $('#results').append(`<ul><li>Address: ${body.data[i].practices[0].visit_address.street},
          //  ${body.data[i].practices[0].visit_address.city},
          //  ${body.data[i].practices[0].visit_address.state},
          //  ${body.data[i].practices[0].visit_address.zip}</li></ul>`);
          //$('#results').append(`<ul><li>Phone Number: ${body.data[i].practices[0].phones[0].number}</li></ul>`);
          //$('#results').append(`<ul><li>Website: ${body.data[i].practices[0].website}</li></ul>`); //some might not have website
          //$('#results').append(`<ul><li>Accepts new patients: ${body.data[i].practices[0].accepts_new_patients}</li></ul><br>`); //return true or false
        }
      }
    }, function(error){
      $('#errors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
