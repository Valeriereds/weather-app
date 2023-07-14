// variables for api key and url
// var for city to collect the user search input
// use a for city variable and appid  for the api key to look up 
// we'll need 2 urls: one for the 5day forecast {lat/long}
// 2nd url will be needed for the city info to input for the city data
var keyMe = "373d8c572f14892cf8f19bb961710ac8"
var cordLink = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=373d8c572f14892cf8f19bb961710ac8"
var cityLink = "https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid=373d8c572f14892cf8f19bb961710ac8"
var searchMe = document.getElementById("search-button");
var listHistory = document.getElementById("result-content");
var itsToday = document.getElementById("today")
var userInMe = document.getElementById("user-input")

// searchMe.addEventListener("click", getCity);
searchMe.addEventListener("click", seaCity);
var uUsedMe = [];


function seaCity(event) {
  event.preventDefault();
  var giveMe = userInMe.value
  uUsedMe.push(giveMe);
  // pushing whatever the user input is giving into the array
  localStorage.setItem("result-text", JSON.stringify(uUsedMe));
  console.log(uUsedMe);
  hisStory();
}

function hisStory() {
  var saveMe = JSON.parse(localStorage.getItem("result-text"));
  if (saveMe !== null) {
    uUsedMe = saveMe;
    for (i=0; i < saveMe.length; i++){
      var cityButt = saveMe[i];
      console.log(cityButt)
      var listMe = document.createElement("button");
      listMe.textContent = cityButt;
      // listMe.setAttribute("result-content", i);
      listHistory.appendChild(listMe);
    } 
  }
}






// need to append child to add var list to html
// might have to fetch it over and over again for different cities

//     })
// };




// api link for each city
// var link for long /lat
// var city url
// user inputs city it goes into cityurl
// from cityurl well take the lat/long


// fetch function for api
// we need the city lat/long 


// search button click event listener
// function to save user search to local storage
// function to render it to page


// need a conditional function for day.js to render weather by date/time accurately on the page
// need to have the api linked for long/lat of at least 5 cities/zipcodes
// can we do this for all cities instead of just named cities?
// request url variable 