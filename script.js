
const apiKey = "ba377bb3839b80ec734b00d9dcf9da42"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

var searchBtn = document.querySelector(".search button");
async function checkWeather(){
    var city = document.querySelector(".search input").value;
    const response = await fetch(apiUrl + "&q="+city+"&appid="+apiKey)

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    var data = await response.json()
    var temp = Math.round(data.main.temp);
    var location = data.name;
    var humidity = data.main.humidity;
    var wind = Math.round(data.wind.speed)

    document.querySelector(".weather").style.display = "block";
    
    document.querySelector(".temp").innerHTML =  `${temp}°C`;
    document.querySelector(".city").innerHTML = location;
    document.querySelector(".humidity").innerHTML = `${humidity} %`;
    document.querySelector(".wind").innerHTML =  `${wind} km/h`;
    
    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }else if(data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    }else if(data.weather[0].main == "Snow"){
        document.querySelector(".weather-icon").src = "images/snow.png";
    }else if(data.weather[0].main == "Mist"){
        document.querySelector(".weather-icon").src = "images/mist.png";
    }else if(data.weather[0].main == "Wind"){
        document.querySelector(".weather-icon").src = "images/wind.png";
    }else if(data.weather[0].main == "Humidity"){
        document.querySelector(".weather-icon").src = "images/humidity.png";
    }else if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = "images/clear.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", checkWeather)
