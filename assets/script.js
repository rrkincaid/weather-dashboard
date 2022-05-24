var today = moment();
$("#current-day").text(today.format("dddd, MMMM Do YYYY, h:mm a"));


var mapData = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=ad8a1e948374e09ead4e5a1ef9d52398"


$(".submit-button").on("click", function () { 
    var searchCity = $(".city").val()
    console.log(searchCity)
    searchWeather(searchCity)
});



function searchWeather(city) {
    var latLongApi = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=ad8a1e948374e09ead4e5a1ef9d52398"
    fetch(latLongApi).then(function (res) {
        return res.json()
    }).then(function (data) {
        var lat = data[0].lat
        var lon = data[0].lon
        console.log(data)
        var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=ad8a1e948374e09ead4e5a1ef9d52398&units=imperial"
        fetch(weatherApi).then(function (res) {
            return res.json()
        }).then(function (data) {
            console.log(data)
        document.querySelector("#chosen-city").innerText = "Weather in " + city;
        document.querySelector("#temperature").innerText = data.current.temp + " F";
        document.querySelector("#wind-speed").innerText = "Wind Speed: " + data.current.wind_speed + " mph";
        document.querySelector("#humidity").innerText = "Humidity " + data.current.humidity + "%";
            
            for (i = 0; i < 5; i++)  {
                var div = document.createElement("div")
                div.classList.add("col")
                var day = document.createElement("p")
                day.innerText = "Day " + (i + 1);
                div.append(day)
                var dayTemp = document.createElement("p")
                dayTemp.innerText = "Day Temp: " + data.daily[i].temp.day + " F"
                var nightTemp = document.createElement("p")
                nightTemp.innerText = "Night Temp: " + data.daily[i].temp.night + " F"
                div.append(dayTemp, nightTemp)
                document.querySelector(".row-cols-2").append(div) 
                
            } 
        })
    })
};  







// let weatherData = {
//     apiKey: "ad8a1e948374e09ead4e5a1ef9d52398",
//     fetchWeather: function (name) {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=metric&appid=" + this.apiKey).then((response) => response.json()).then((data) => this.displayWeather(data));
//     },
    
//     displayWeather: (data) => {
//         // const { name } = data;
//         // const { icon, description } = data.weather[0];
//         // const { temp, humidity } = data.main;
//         // const { speed } = data.wind;
        
//         //need to also put in querySelectors for #day-1-weather, etc. - need to have similar peramters as main so c/p once code above works 
//     }
//     };
//     console.log(weatherData)
// };

////////



// function displayWeather() {
//     var 
// }
// var chosenCity = () {

// }

// const form = document.querySelector(".top-banner form");

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   const inputVal = input.value;
// });

//  fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // do stuff with the data
//   })
//   .catch(() => {
//     msg.textContent = "Please search for a valid city 😩";
//   });