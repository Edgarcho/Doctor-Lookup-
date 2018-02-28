const apiKey = require('./../.env').apiKey;

export let searchApi = function(searchInput, operator) {
  if(operator === "name"){
      return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let location = [45.523, -122.676, 100];
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${searchInput}&location=${location[0]},${location[1]},${location[2]}&skip=0&limit=10&user_key=${apiKey}`;
        console.log(url);
        request.onload = function(){
          if(this.status === 200){
            resolve(request.response);
          } else{
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }else {
      return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let location = [45.523, -122.676, 100];
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${searchInput}&location=${location[0]},${location[1]},${location[2]}&skip=0&limit=10&user_key=${apiKey}`;
        console.log(url);
        request.onload = function(){
          if(this.status === 200){
            resolve(request.response);
          } else{
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }
};
