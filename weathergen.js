$(document).ready(function() {

  // get geolocation

  $.getJSON("http://www.ip-api.com/json", function(data) {

    // create url with lat + lon of user's geolocation

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + data.lat + "&lon=" + data.lon + "&appid=cd28daebaf99b3ab35730e193383f4d6", function(data) {
      
   // declare variables

      var location = data.name + ", " + data.sys.country;
      var kel = Math.floor(data.main.temp);
      var far = "It's currently " + Math.floor((data.main.temp * (9 / 5)) - 459.7) + "°F ";
      var cel = "It's currently " + Math.floor(data.main.temp - 273.15) + "°C ";
     var conditions = data.weather[0].main;

      // show location, temp, and weather conditions

      $("#location").html("You're in " + location);
      $("#temp").html(far);
      $("#conditions").html("The weather is " + conditions.charAt(0).toLowerCase() + conditions.slice(1));

      // click button to toggle between fahrenheit and celsius

      $("#toggle").click(function() {
        $("#temp").text() == far ?
          $("#temp").text(cel) : $("#temp").text(far);
        $("#toggle").text() === "F" ?
          $("#toggle").text("C") : $("#toggle").text("F");
      });

    })
  });
});