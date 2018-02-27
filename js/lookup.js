/*let LookupModule = function () {

}

LookupModule.prototype.getData = function(userInput){
  let location = [45.523, -122.676, 100];
  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?first_name=`+ searchInput +`&location=`+ location[0] + ',' + location[1] + ',' + location[2] +`&skip=0&limit=10&user_key=`+ user_key,
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
        $('#result').append(`<ul><li>Address: ${response.data[i].practices.visit_address.street}, ${response.data[i].practices.visit_address.city}, ${response.data[i].practices.visit_address.state}, ${response.data[i].practices.visit_address.zip}</li></ul>`);
        $('#result').append(`<ul><li>Phone Number: ${response.data[i].practices.phones.number}</li></ul>`);
        $('#result').append(`<ul><li>Accepts new patients: ${response.data[i].practices.accepts_new_patients}</li></ul><br>`);
      }
    },
    error: function(){
      $('#errors').text("There was an error processing your request. Please try again.");
    }
  });
}

exports.lookupModule = lookupModule;

/*
var ApplicationModule = function() {

}

ApplicationModule.prototype.getData = function(userInput, displayData) {
  $.get('https://www.fictionalapi.xyz/endpoint?' + userInput)
    .then(function(results) {
      displayData(results);
    })
    .fail(function() {
      console.log('something went wrong');
    });
}

exports.applicationModule = ApplicationModule;
*/
