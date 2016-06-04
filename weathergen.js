$(document).ready(function(){
  
  // get geolocation
  
	$.getJSON("http://www.ip-api.com/json", function(data) {

	// create url with lat + lon of user's geolocation

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + data.lat + "&lon=" + data.lon + "&appid=cd28daebaf99b3ab35730e193383f4d6", function(data) {

	var location = data.name + ", " + data.sys.country;
	var kel = Math.floor(data.main.temp);
	var far = Math.floor((data.main.temp * (9/5)) - 459.7) + "°";
	var cel = Math.floor(data.main.temp - 273.15);
	var conditions = data.weather[0].main;

	// show location, temp, and weather conditions

    	$("#location").html(location);
    	$("#temp").html(far);
    	$("#conditions").html(conditions);
    });


	})
});