var LookupModule = require('./lookup.js').lookupModule;

$(document).ready(function(){
  var lookupModule = new LookupModule()
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    let searchInput = $('#userInput').val();
    lookupModule.getData(userInput);


    let user_key =('58be7bb0af953f79bc4096870af09a9b');
    $('#userInput').val("");

  });
});

/*
var ApplicationModule = require('./scripts.js').applicationModule;

var displayData = function(results) {
  results.forEach(function(result) {
    $('#some-unordered-list').append('<li>' + result.name + '</li>');
  });
}

$(document).ready(function() {
  var applicationModule = new ApplicationModule();

  $('#some-form').submit(function(event) {
    event.preventDefault();

    var userInput = $('#text-input').val();
    applicationModule.getData(userInput, displayData);
  });
});
