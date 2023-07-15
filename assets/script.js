// variables for API keys, and additional content
var keyMe = "373d8c572f14892cf8f19bb961710ac8"
var letsLinkCity = "https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid=373d8c572f14892cf8f19bb961710ac8&units=imperial"
var searchMe = document.getElementById("search-button");
var hitList = document.getElementById("result-content");
var aLovelyDay = document.getElementById("today")
var userInMe = document.getElementById("user-input")
var billWeathers = document.getElementById("todays-weather")
var billWeathers1 = document.getElementById("card-uno")
var billWeathers2 = document.getElementById("card-dos")
var billWeathers3 = document.getElementById("card-tres")
var billWeathers4 = document.getElementById("card-cuatro")
var billWeathers5 = document.getElementById("card-cinco")
var diaUno = document.getElementById("unodia")
var diaDos = document.getElementById("dosdia")
var diaTres = document.getElementById("tresdia")
var diaCuat = document.getElementById("cuatrodia")
var diaCin = document.getElementById("cincodia")


// search button
searchMe.addEventListener("click", wheresCarmen);
searchMe.addEventListener("click", wheresWaldo);
var uUsedMe = [];

// function for user's searched city
function wheresWaldo(event) {
  event.preventDefault();
  var giveMe = userInMe.value
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${giveMe}&appid=373d8c572f14892cf8f19bb961710ac8&units=imperiral`).then(function (response) {
    return response.json()
  }).then(function(data) {
    uUsedMe.push(giveMe);
    localStorage.setItem("result-text", JSON.stringify(uUsedMe));
    var lats = (data.city.coord.lat);
    var getaLon = (data.city.coord.lon);
    wheresCarmen(lats, getaLon);
    hisStory();
  }
  )
}

// function for search history
function hisStory() {
  var saveMe = JSON.parse(localStorage.getItem("result-text"));
  hitList.innerHTML = " ";
  billWeathers.innerHTML = " ";
  billWeathers1.innerHTML = " ";
  billWeathers2.innerHTML = " ";
  billWeathers3.innerHTML = " ";
  billWeathers4.innerHTML = " ";
  billWeathers5.innerHTML = " ";
  if (saveMe !== null) {
    uUsedMe = saveMe;
    for (i=0; i < saveMe.length; i++){
      var cityButt = saveMe[i];
      var listMe = document.createElement("button");
      listMe.textContent = cityButt;
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
    console.log(data)

    var watDayIsIt = dayjs(data.list[0].dt_txt).format("M/D/YYYY")
    var uFeelMe = data.list[0].main.feels_like;
    var oDaHumidity = data.list[0].main.humidity;
    var digaMe = data.list[0].weather[0].description;
    var thatsHot = data.list[0].main.temp;
    var blowMe = data.list[0].wind.speed;
    var iconIck = data.list[0].weather[0].icon;

    itsGonnaBe(uFeelMe, oDaHumidity, thatsHot, digaMe, blowMe, watDayIsIt, iconIck)

    var watDayIsIt1 = dayjs(data.list[5].dt_txt).format("M/D/YYYY")
    var uFeelMe1 = data.list[5].main.feels_like;
    var oDaHumidity1 = data.list[5].main.humidity;
    var digaMe1 = data.list[5].weather[0].description;
    var thatsHot1 = data.list[5].main.temp;
    var blowMe1 = data.list[5].wind.speed;
    var iconIck1 = data.list[5].weather[0].icon;

    itsGonnaBe1(uFeelMe1, oDaHumidity1, thatsHot1, digaMe1, blowMe1, watDayIsIt1, iconIck1) 

    var watDayIsIt2 = dayjs(data.list[12].dt_txt).format("M/D/YYYY")
    var uFeelMe2 = data.list[12].main.feels_like;
    var oDaHumidity2 = data.list[12].main.humidity;
    var digaMe2 = data.list[12].weather[0].description;
    var thatsHot2 = data.list[12].main.temp;
    var blowMe2 = data.list[12].wind.speed;
    var iconIck2 = data.list[12].weather[0].icon;

    itsGonnaBe2(uFeelMe2, oDaHumidity2, thatsHot2, digaMe2, blowMe2, watDayIsIt2, iconIck2)

    var watDayIsIt3 = dayjs(data.list[22].dt_txt).format("M/D/YYYY")
    var uFeelMe3 = data.list[22].main.feels_like;
    var oDaHumidity3 = data.list[22].main.humidity;
    var digaMe3 = data.list[22].weather[0].description;
    var thatsHot3 = data.list[22].main.temp;
    var blowMe3 = data.list[22].wind.speed;
    var iconIck3 = data.list[22].weather[0].icon;

    itsGonnaBe3(uFeelMe3, oDaHumidity3, thatsHot3, digaMe3, blowMe3, watDayIsIt3, iconIck3)

    var watDayIsIt4 = dayjs(data.list[30].dt_txt).format("M/D/YYYY")
    var uFeelMe4 = data.list[30].main.feels_like;
    var oDaHumidity4 = data.list[30].main.humidity;
    var digaMe4 = data.list[30].weather[0].description;
    var thatsHot4 = data.list[30].main.temp;
    var blowMe4 = data.list[30].wind.speed;
    var iconIck4 = data.list[30].weather[0].icon;

    itsGonnaBe4(uFeelMe4, oDaHumidity4, thatsHot4, digaMe4, blowMe4, watDayIsIt4, iconIck4)

    var watDayIsIt5 = dayjs(data.list[38].dt_txt).format("M/D/YYYY")
    var uFeelMe5 = data.list[38].main.feels_like;
    var oDaHumidity5 = data.list[38].main.humidity;
    var digaMe5 = data.list[38].weather[0].description;
    var thatsHot5 = data.list[38].main.temp;
    var blowMe5 = data.list[38].wind.speed;
    var iconIck5 = data.list[38].weather[0].icon;

    itsGonnaBe5(uFeelMe5, oDaHumidity5, thatsHot5, digaMe5, blowMe5, watDayIsIt5, iconIck5)

  });
  
}

// function to render data to main container
function itsGonnaBe(uFeelMe, oDaHumidity, thatsHot, digaMe, blowMe, watDayIsIt, iconData) {

    var feelMe = document.createElement("li")
    var humidMe = document.createElement("li")
    var scribeMe = document.createElement("li");
    var temptMe = document.createElement("li")
    var windMe = document.createElement("li");
    var merylStreep = document.createElement("img")
    
    aLovelyDay.textContent = "Forecast For " + watDayIsIt
    feelMe.textContent = "Feels Like: " + Math.round(uFeelMe) + '\u00b0' + "F"
    humidMe.textContent = "Humidity: " + oDaHumidity + '\u0025'
    scribeMe.textContent = digaMe
    temptMe.textContent = "Temperature: " + Math.round(thatsHot) + '\u00B0' +"F"
    windMe.textContent = "Wind Speed: " + Math.round(blowMe) + " M.P.H."
    merylStreep.setAttribute("src", `https://openweathermap.org/img/w/${iconData}.png`)

    billWeathers.appendChild(feelMe)
    billWeathers.appendChild(humidMe)
    billWeathers.appendChild(scribeMe)
    billWeathers.appendChild(temptMe)
    billWeathers.appendChild(windMe)
    billWeathers.appendChild(merylStreep)

}

// functions to render data to the 5 day forecast cards, 1-5
function itsGonnaBe1(uFeelMe1, oDaHumidity1, thatsHot1, digaMe1, blowMe1, watDayIsIt1, iconData) {

    var feelMe1 = document.createElement("li")
    var humidMe1 = document.createElement("li")
    var scribeMe1 = document.createElement("li");
    var temptMe1 = document.createElement("li")
    var windMe1 = document.createElement("li");
    var merylStreep1 = document.createElement("img");
    
    diaUno.textContent = "Forecast For " + watDayIsIt1
    feelMe1.textContent = "Feels Like: " + Math.round(uFeelMe1) + '\u00b0' + "F"
    humidMe1.textContent = "Humidity: " + oDaHumidity1 + '\u0025'
    scribeMe1.textContent = digaMe1
    temptMe1.textContent = "Temperature: " + Math.round(thatsHot1) + '\u00B0' +"F"
    windMe1.textContent = "Wind Speed: " + Math.round(blowMe1) + " M.P.H."
    merylStreep1.setAttribute("src", `https://openweathermap.org/img/w/${iconData}.png`)
    
    billWeathers1.appendChild(feelMe1)
    billWeathers1.appendChild(humidMe1)
    billWeathers1.appendChild(scribeMe1)
    billWeathers1.appendChild(temptMe1)
    billWeathers1.appendChild(windMe1)
    billWeathers1.appendChild(merylStreep1)
}

function itsGonnaBe2(uFeelMe2, oDaHumidity2, thatsHot2, digaMe2, blowMe2, watDayIsIt2, iconData) {

    var feelMe2 = document.createElement("li")
    var humidMe2 = document.createElement("li")
    var scribeMe2 = document.createElement("li");
    var temptMe2 = document.createElement("li")
    var windMe2 = document.createElement("li");
    var merylStreep2 = document.createElement("img")
    
    diaDos.textContent = "Forecast For " + watDayIsIt2
    feelMe2.textContent = "Feels Like: " + Math.round(uFeelMe2) + '\u00b0' + "F"
    humidMe2.textContent = "Humidity: " + oDaHumidity2 + '\u0025'
    scribeMe2.textContent = digaMe2
    temptMe2.textContent = "Temperature: " + Math.round(thatsHot2) + '\u00B0' +"F"
    windMe2.textContent = "Wind Speed: " + Math.round(blowMe2) + " M.P.H."
    merylStreep2.setAttribute("src", `https://openweathermap.org/img/w/${iconData}.png`)

    billWeathers2.appendChild(feelMe2)
    billWeathers2.appendChild(humidMe2)
    billWeathers2.appendChild(scribeMe2)
    billWeathers2.appendChild(temptMe2)
    billWeathers2.appendChild(windMe2)
    billWeathers2.appendChild(merylStreep2)
}

function itsGonnaBe3(uFeelMe3, oDaHumidity3, thatsHot3, digaMe3, blowMe3, watDayIsIt3, iconData) {

    var feelMe3 = document.createElement("li")
    var humidMe3 = document.createElement("li")
    var scribeMe3 = document.createElement("li");
    var temptMe3 = document.createElement("li")
    var windMe3 = document.createElement("li");
    var merylStreep3 = document.createElement("img")
    
    diaTres.textContent = "Forecast For " + watDayIsIt3
    feelMe3.textContent = "Feels Like: " + Math.round(uFeelMe3) + '\u00b0' + "F"
    humidMe3.textContent = "Humidity: " + oDaHumidity3 + '\u0025'
    scribeMe3.textContent = digaMe3
    temptMe3.textContent = "Temperature: " + Math.round(thatsHot3) + '\u00B0' +"F"
    windMe3.textContent = "Wind Speed: " + Math.round(blowMe3) + " M.P.H."
    merylStreep3.setAttribute("src", `https://openweathermap.org/img/w/${iconData}.png`)

    billWeathers3.appendChild(feelMe3)
    billWeathers3.appendChild(humidMe3)
    billWeathers3.appendChild(scribeMe3)
    billWeathers3.appendChild(temptMe3)
    billWeathers3.appendChild(windMe3)
    billWeathers3.appendChild(merylStreep3)
}

function itsGonnaBe4(uFeelMe4, oDaHumidity4, thatsHot4, digaMe4, blowMe4, watDayIsIt4, iconData) {

    var feelMe4 = document.createElement("li")
    var humidMe4 = document.createElement("li")
    var scribeMe4 = document.createElement("li");
    var temptMe4 = document.createElement("li")
    var windMe4 = document.createElement("li");
    var merylStreep4 = document.createElement("img")
    
    diaCuat.textContent = "Forecast For " + watDayIsIt4
    feelMe4.textContent = "Feels Like: " + Math.round(uFeelMe4) + '\u00b0' + "F"
    humidMe4.textContent = "Humidity: " + oDaHumidity4 + '\u0025'
    scribeMe4.textContent = digaMe4
    temptMe4.textContent = "Temperature: " + Math.round(thatsHot4) + '\u00B0' +"F"
    windMe4.textContent = "Wind Speed: " + Math.round(blowMe4) + " M.P.H."
    merylStreep4.setAttribute("src", `https://openweathermap.org/img/w/${iconData}.png`)

    billWeathers4.appendChild(feelMe4)
    billWeathers4.appendChild(humidMe4)
    billWeathers4.appendChild(scribeMe4)
    billWeathers4.appendChild(temptMe4)
    billWeathers4.appendChild(windMe4)
    billWeathers4.appendChild(merylStreep4)
}

function itsGonnaBe5(uFeelMe5, oDaHumidity5, thatsHot5, digaMe5, blowMe5, watDayIsIt5, iconData) {

    var feelMe5 = document.createElement("li")
    var humidMe5 = document.createElement("li")
    var scribeMe5 = document.createElement("li");
    var temptMe5 = document.createElement("li")
    var windMe5 = document.createElement("li");
    var merylStreep5 = document.createElement("img")
    
    diaCin.textContent = "Forecast For " + watDayIsIt5
    feelMe5.textContent = "Feels Like: " + Math.round(uFeelMe5) + '\u00b0' + "F"
    humidMe5.textContent = "Humidity: " + oDaHumidity5 + '\u0025'
    scribeMe5.textContent = digaMe5
    temptMe5.textContent = "Temperature: " + Math.round(thatsHot5) + '\u00B0' +"F"
    windMe5.textContent = "Wind Speed: " + Math.round(blowMe5) + " M.P.H."
    merylStreep5.setAttribute("src", `https://openweathermap.org/img/w/${iconData}.png`)

    billWeathers5.appendChild(feelMe5)
    billWeathers5.appendChild(humidMe5)
    billWeathers5.appendChild(scribeMe5)
    billWeathers5.appendChild(temptMe5)
    billWeathers5.appendChild(windMe5)
    billWeathers5.appendChild(merylStreep5)
    
  }






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