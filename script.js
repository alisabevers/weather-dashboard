var APIKey = "124280980cdfebb4a20f890339a90071";
var city;
var citySearchBtn = document.querySelector("#citySearchBtn");
var citySearch = document.querySelector("#searchCity");
var searchHistory = document.querySelector(".searchHistory");
var date = dayjs();
var todayWeatherHeader = document.querySelector("#today-weather-header");

var todayTemp = document.querySelector("#todayTemp");
var today

// saves the user input / city name and adds to search history
citySearchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (citySearch.value == "") {
        return;
    }
    city = citySearch.value;
    var newSearchHistory = document.createElement("button");
    newSearchHistory.textContent = city.toUpperCase();
    newSearchHistory.classList.add("btn");
    newSearchHistory.classList.add("btn-primary");
    searchHistory.appendChild(newSearchHistory);

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(queryURL)
    .then(function (response) {
        return response.json()
    .then(function (data) {
        console.log(data);
        todayWeatherHeader.textContent = data.name + " " + date.format('(M/D/YYYY)');
        });
    });
});
