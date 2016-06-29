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
     var id = data.weather.id;
      

      // show location, temp, and weather conditions

      $("#location").html("You're in " + location);
      $("#temp").html(far);
      $("#conditions").html("The weather is " + conditions.toLowerCase());

      // click button to toggle between fahrenheit and celsius

      $("#toggle").click(function() {
        $("#temp").text() == far ?
          $("#temp").text(cel) : $("#temp").text(far);
        $("#toggle").text() === "F" ?
          $("#toggle").text("C") : $("#toggle").text("F");
      }); 
      
      // change container details dependent on weather conditions lmao this didn't take 10000000 years or anything
      if (id > 199 && id <= 232) {
	$("#container").css("background-color", "#333333");
        $("#container").css("border", "black solid 1px");
        $("#location").css("color", "yellow");
        $("#temp").css("color", "yellow");
        $("#conditions").css("color", "yellow");
        $("button").css("color", "yellow");
        $("button").css("background-color", "#333333");
        $("button").css("border", "yellow solid 1px");
}
else if (id >= 300 && id <= 531) {
	$('#container').css("background-color", "#cccccc");
        $("#container").css("border", "black dotted 1px");
        $("#location").css("color", "#000066");
        $("#temp").css("color", "#000066");
        $("#conditions").css("color", "#000066");
        $("button").css("background-color", "#333333");
        $("button").css("color", "white");
        $("button").css("border", "black solid 1px");
}
else if (id >= 600 && id <= 622) {
	$("#container").css("background-color", "#ffffff");
        $("#container").css("border", "blue dotted 1px");
        $("#location").css("color", "blue");
        $("#temp").css("color", "blue");
        $("#conditions").css("color", "blue");
        $("button").css("background-color", "#ffffff");
        $("button").css("color", "blue");
        $("button").css("border", "blue dotted 1px");
}
else if (id >= 700 && id <= 781) {
	$("#container").css("background-color", "#ffffff");
        $("#container").css("border", "#333333 dotted 1px");
        $("#location").css("color", "#333333");
        $("#temp").css("color", "#333333");
        $("#conditions").css("color", "#333333");
        $("button").css("background-color", "#333333");
        $("button").css("color", "white");
        $("button").css("border", "#8c8c8c dotted 1px");
}
else if (id = 800) {
	$('#container').css("background-color", "#99ccff");
        $("#container").css("border", "blue dotted 1px");
        $('#location').css("color", "black");
        $('#temp').css("color", "black");
        $('#conditions').css("color", "black");
        $("button").css("background-color", "white");
        $('button').css("border", "blue solid 1px");
        $("button").css("color", "blue");
}
else if (id >= 801 && id <= 804) {
	$("#container").css("background-color", "#ffffff");
        $("#container").css("border", "#333333 dotted 1px");
        $("#location").css("color", "#333333");
        $("#temp").css("color", "#333333");
        $("#conditions").css("color", "#333333");
        $("button").css("background-color", "#333333");
        $("button").css("color", "white");
        $("button").css("border", "#8c8c8c dotted 1px");
}
else if (id >=900 && id <= 906) {
	 $("#container").css("background-color", "#ff3300");
        $("#container").css("border", "black solid 1px");
        $("#location").css("color", "black");
        $("#temp").css("color", "black");
        $("#conditions").css("color", "black");
        $("button").css("color", "white");
        $("button").css("background-color", "black");
        $("button").css("border", "black solid 1px");
}
      
    })
  });
});