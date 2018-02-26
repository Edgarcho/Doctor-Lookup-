$(document).ready(function(){
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    let searchInput = $('#userInput').val();
    let location = [45.523, -122.676, 100];
    let user_key =('58be7bb0af953f79bc4096870af09a9b');
    $('#userInput').val("");
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=`+ searchInput +`&location=`+ location[0] + ',' + location[1] + ',' + location[2] +`&skip=0&limit=10&user_key=`+ user_key,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        $('#result').append(`<ul><li>First Name: ${response.data[0].profile.first_name}</li></ul>`);
        $('#result').append(`<ul><li>Last Name: ${response.data[0].profile.last_name}</li></ul>`);
        $('#result').append(`<ul><li>Address: ${response.data[0].practices[0].visit_address.street}, ${response.data[0].practices[0].visit_address.city}, ${response.data[0].practices[0].visit_address.state}, ${response.data[0].practices[0].visit_address.zip}</li></ul>`);
        $('#result').append(`<ul><li>Phone Number: ${response.data[0].practices[0].phones[0].number}</li></ul>`);
        $('#result').append(`<ul><li>Accepts new patients: ${response.data[0].practices[0].accepts_new_patients}</li></ul>`);
      },
      error: function(){
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
