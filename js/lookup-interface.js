$(document).ready(function(){
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    let searchInput = $('#userInput').val();
    let location = [45.523, -122.676, 100];
    let user_key =('58be7bb0af953f79bc4096870af09a9b');
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=`+ searchInput +`&location=`+ location[0] + ',' + location[1] + ',' + location[2] +`&skip=0&limit=10&user_key=`+ user_key,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        console.log(response.data[0].profile.first_name);
        console.log(response.data[0].profile.last_name);
        console.log(response.data[0].practices[0].visit_address.street);
        console.log(response.data[0].practices[0].visit_address.city);
        console.log(response.data[0].practices[0].visit_address.state);
        console.log(response.data[0].practices[0].visit_address.zip);
        console.log(response.data[0].practices[0].phones[0].number);
        console.log(response.data[0].practices[0].accepts_new_patients);
      },
      error: function(){
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
