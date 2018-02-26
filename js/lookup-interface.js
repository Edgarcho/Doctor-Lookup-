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
        debugger;
        for (let i = 0; i < response.data.length; i++){
          $('#result').append(`<ul><li>First Name: ${response.data[i].profile.first_name}</li></ul>`);
          $('#result').append(`<ul><li>Last Name: ${response.data[i].profile.last_name}</li></ul>`);
          $('#result').append(`<ul><li>Address: ${response.data[i].practices[i].visit_address.street}, ${response.data[i].practices[i].visit_address.city}, ${response.data[i].practices[i].visit_address.state}, ${response.data[i].practices[i].visit_address.zip}</li></ul>`);
          $('#result').append(`<ul><li>Phone Number: ${response.data[i].practices[i].phones[i].number}</li></ul>`);
          $('#result').append(`<ul><li>Accepts new patients: ${response.data[i].practices[i].accepts_new_patients}</li></ul><br>`);
        }
      },
      error: function(){
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
