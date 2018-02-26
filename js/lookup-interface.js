$(document).ready(function(){
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    let searchInput = $('#userInput').val();
    let location = (45.523062, -122.676482, 100);
    let user_key =('58be7bb0af953f79bc4096870af09a9b');
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${searchInput}&location=${location}&user_location=${location}&skip=0&limit=10&user_key=${user_key}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);

      },
      error: function(){
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
