import { searchApi } from './../js/lookup.js';

$(document).ready(function(){
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    let searchInput = $('#userInput').val();
    let operator = $('input:radio[name=operator]:checked').val();
    let searchResult = searchApi(searchInput, operator);
    $('#results, .tableResults').empty();
    $('#errors').empty();
    $('#userInput').val("");
    searchResult.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.length === 0){
        $('#errors').append(`<h3>No doctors meet the search criteria</h3>`);
      }else{
        for(let i = 0; i < body.data.length; i++){
          $('#result, table').append(`<tbody class=tableResults>
            <tr>
            <td>${body.data[i].profile.first_name}</td>
            <td>${body.data[i].profile.last_name}</td>
            <td>${body.data[i].practices[0].visit_address.street},
             ${body.data[i].practices[0].visit_address.city},
             ${body.data[i].practices[0].visit_address.state},
             ${body.data[i].practices[0].visit_address.zip}</td>
            <td>${body.data[i].practices[0].phones[0].number}</td>
            <td>${body.data[i].practices[0].website}</td>
            <td>${body.data[i].practices[0].accepts_new_patients}</td>
            </tr>
            </tbody>`);
          }
        }
    }, function(error){
      $('#errors').append(`There was an error processing your request: ${error.message}`);
    });
  });
});
