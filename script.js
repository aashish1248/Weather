let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(json => showWeatherData(json))
    .catch(error => console.log(error))
}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
}

const showWeatherData = (weatherData) => {
  console.log(weatherData)
  const city = document.getElementById('city-name')
  const weather = document.getElementById('weather-type')
  const temp = document.getElementById('temp')
  const mintemp = document.getElementById('min-temp')
  const maxtemp = document.getElementById('max-temp')
  
  city.innerText = weatherData.name
  weather.innerText = weatherData.weather[0].main
  temp.innerText = weatherData.main.temp
  mintemp.innerText = weatherData.main.temp_min
  maxtemp.innerText = weatherData.main.temp_max
}

