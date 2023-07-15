// variables for api key and url
// var for city to collect the user search input
// use a for city variable and appid  for the api key to look up 
// we'll need 2 urls: one for the 5day forecast {lat/long}
// 2nd url will be needed for the city info to input for the city data
var keyMe = "373d8c572f14892cf8f19bb961710ac8"
var letsLinkCity = "https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid=373d8c572f14892cf8f19bb961710ac8"
var searchMe = document.getElementById("search-button");
var hitList = document.getElementById("result-content");
var aLovelyDay = document.getElementById("today")
var userInMe = document.getElementById("user-input")

// search button
searchMe.addEventListener("click", wheresCarmen);
searchMe.addEventListener("click", wheresWaldo);
var uUsedMe = [];

// function to for user's searched city
function wheresWaldo(event) {
  event.preventDefault();
  var giveMe = userInMe.value
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${giveMe}&appid=373d8c572f14892cf8f19bb961710ac8`).then(function (response) {
    return response.json()
  }).then(function(data) {
    uUsedMe.push(giveMe);
    console.log(uUsedMe);
    // pushing whatever the user input is giving into the array
    localStorage.setItem("result-text", JSON.stringify(uUsedMe));
    console.log("fetch response--------------");
    console.log(data);
    var lats = (data.city.coord.lat);
    var getaLon = (data.city.coord.lon);
    console.log(lats);
    console.log(getaLon);
    wheresCarmen(lats, getaLon);
    hisStory();
  }
  )
}

// function for search history
function hisStory() {
  var saveMe = JSON.parse(localStorage.getItem("result-text"));
  hitList.innerHTML = " ";
  if (saveMe !== null) {
    uUsedMe = saveMe;
    for (i=0; i < saveMe.length; i++){
      var cityButt = saveMe[i];
      console.log(cityButt)
      var listMe = document.createElement("button");
      listMe.textContent = cityButt;
      // listMe.setAttribute("result-content", i);
      hitList.appendChild(listMe);
    } 
  }
}

// function for lat/lon
// added imperial units
function wheresCarmen(lats, getaLon) {
  var letsLinkCoors = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lats + "&lon=" + getaLon + "&appid=373d8c572f14892cf8f19bb961710ac8&units=imperial"
  fetch(letsLinkCoors)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
   
    var watDayIsIt = data.list[0].dt_txt
    var uFeelMe = data.list[0].main.feels_like;
    var oDaHumidity = data.list[0].main.humidity;
    var thatsHot = data.list[0].main.temp;
    var digaMe = data.list[0].weather[0].description;
    var blowMe = data.list[0].wind.speed;
    var imBlind = data.list[0].visibility;
    var watDayIsIt = data.list[0].dt_txt



    var uFeelMe1 = data.list[1].main.feels_like;
    var oDaHumidity1 = data.list[1].main.humidity;
    var thatsHot1 = data.list[1].main.temp;
    var digaMe1 = data.list[1].weather[0].description;
    var blowMe1 = data.list[1].wind.speed;
    var imBlind1 = data.list[1].visibility;
    var watDayIsIt1 = data.list[1].dt_txt



    var uFeelMe2 = data.list[2].main.feels_like;
    var oDaHumidity2 = data.list[2].main.humidity;
    var thatsHot2 = data.list[2].main.temp;
    var digaMe2 = data.list[2].weather[0].description;
    var blowMe2 = data.list[2].wind.speed;
    var imBlind2 = data.list[2].visibility;
    var watDayIsIt2 = data.list[2].dt_txt



    var uFeelMe3 = data.list[3].main.feels_like;
    var oDaHumidity3 = data.list[3].main.humidity;
    var thatsHot3 = data.list[3].main.temp;
    var digaMe3 = data.list[3].weather[0].description;
    var blowMe3 = data.list[3].wind.speed;
    var imBlind3 = data.list[3].visibility;
    var watDayIsIt3 = data.list[3].dt_txt



    var uFeelMe4 = data.list[4].main.feels_like;
    var oDaHumidity4 = data.list[4].main.humidity;
    var thatsHot4 = data.list[4].main.temp;
    var digaMe4 = data.list[4].weather[0].description;
    var blowMe4 = data.list[4].wind.speed;
    var imBlind4 = data.list[4].visibility;
    var watDayIsIt4 = data.list[4].dt_txt



    var uFeelMe5 = data.list[5].main.feels_like;
    var oDaHumidity5 = data.list[5].main.humidity;
    var thatsHot5 = data.list[5].main.temp;
    var digaMe5 = data.list[5].weather[0].description;
    var blowMe5 = data.list[5].wind.speed;
    var imBlind5 = data.list[5].visibility;
    


  });
  
}

// 






// console.log(uFeelMe)
// console.log(oDaHumidity)
// console.log(thatsHot)
// console.log(digaMe)
// console.log(blowMe)
// console.log(imBlind)

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