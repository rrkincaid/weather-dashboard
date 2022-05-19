var today = moment();
$("#current-day").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));



var mapData = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=ad8a1e948374e09ead4e5a1ef9d52398"


$(".submit-button").on("click", function () { 
    var searchCity = $(".city").val()
    console.log(searchCity)
    searchWeather(searchCity)
});

function searchWeather(city) {
    var latLongApi = "http://api.openweathermap.org/geo/1.0/direct?q="+ city + "&limit=1&appid=ad8a1e948374e09ead4e5a1ef9d52398"
    fetch(latLongApi).then(function(res) {
    console.log(res)
    })
    
let weatherData = {
    apiKey: "ad8a1e948374e09ead4e5a1ef9d52398",
    fetchWeather: function (name) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=metric&appid=" + this.apiKey).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    
    displayWeather: (data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector("#chosen-city").innerText = "Weather in " + city;
        document.querySelector().src = "https://openweathermap.org/img/wn/" + icon + "01n@2x.png";
        document.querySelector("#description").innerText = description;
        document.querySelector("#temperature").innerText = temp + "C";
        document.querySelector("#wind-speed").innerText = "Wind Speed" + speed + "km/h";
        document.querySelector("#humidity").innerText = "Humidity" + humidity + "%";
    }
    };
    console.log(weatherData)
};

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