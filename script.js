var APIKey = "124280980cdfebb4a20f890339a90071";
var city;
var citySearchBtn = document.querySelector("#citySearchBtn");
var citySearch = document.querySelector("#searchCity");
var searchHistory = document.querySelector(".searchHistory");

// saves the user input/city name and adds to the search history
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


    // fetches the selected city's current weather details and displays in the main container, at the top of the page
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    var date = dayjs();
    var todayWeatherHeader = document.querySelector("#today-weather-header");
    var todayTemp = document.querySelector("#todayTemp");
    var todayWind = document.querySelector("#todayWind");
    var todayHumidity = document.querySelector("#todayHumidity");

    fetch(queryURL)
    .then(function (response) {
        return response.json()
    .then(function (data) {
        // console.log(data);
        todayWeatherHeader.textContent = data.name + " " + date.format('(M/D/YYYY)');
        todayTemp.textContent = "Temp: " + data.main.temp + "°";
        todayWind.textContent = "Wind: " + data.wind.speed + " MPH";
        todayHumidity.textContent = "Humidity: " + data.main.humidity + "%";
        

            // fetches the 5-day forecast and displays into to the cards
            var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + APIKey + "&units=imperial";
            var forecastTemp1 = document.querySelector("#forecastTemp1");
            var forecastTemp2 = document.querySelector("#forecastTemp2");
            var forecastTemp3 = document.querySelector("#forecastTemp3");
            var forecastTemp4 = document.querySelector("#forecastTemp4");
            var forecastTemp5 = document.querySelector("#forecastTemp5");

            var forecastWind1 = document.querySelector("#forecastWind1");
            var forecastWind2 = document.querySelector("#forecastWind2");
            var forecastWind3 = document.querySelector("#forecastWind3");
            var forecastWind4 = document.querySelector("#forecastWind4");
            var forecastWind5 = document.querySelector("#forecastWind5");

            var forecastHumidity1 = document.querySelector("#forecastHumidity1");
            var forecastHumidity2 = document.querySelector("#forecastHumidity2");
            var forecastHumidity3 = document.querySelector("#forecastHumidity3");
            var forecastHumidity4 = document.querySelector("#forecastHumidity4");
            var forecastHumidity5 = document.querySelector("#forecastHumidity5");

            fetch (forecastURL)
            .then(function (response) {
                return response.json()
            .then(function (data) {
                console.log(data);
                forecastTemp1.textContent = "Temp: " + data.list[0].main.temp + "°";
                forecastTemp2.textContent = "Temp: " + data.list[1].main.temp + "°";
                forecastTemp3.textContent = "Temp: " + data.list[2].main.temp + "°";
                forecastTemp4.textContent = "Temp: " + data.list[3].main.temp + "°";
                forecastTemp5.textContent = "Temp: " + data.list[4].main.temp + "°";

                forecastWind1.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
                forecastWind2.textContent = "Wind: " + data.list[1].wind.speed + " MPH";
                forecastWind3.textContent = "Wind: " + data.list[2].wind.speed + " MPH";
                forecastWind4.textContent = "Wind: " + data.list[3].wind.speed + " MPH";
                forecastWind5.textContent = "Wind: " + data.list[4].wind.speed + " MPH";

                forecastHumidity1.textContent = "Humidity: " + data.list[0].main.humidity + "%";
                forecastHumidity2.textContent = "Humidity: " + data.list[1].main.humidity + "%";
                forecastHumidity3.textContent = "Humidity: " + data.list[2].main.humidity + "%";
                forecastHumidity4.textContent = "Humidity: " + data.list[3].main.humidity + "%";
                forecastHumidity5.textContent = "Humidity: " + data.list[4].main.humidity + "%";
            })
            })
        });
    });
});