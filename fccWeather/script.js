const getBtn = document.getElementById("get-weather-btn");
const cityName = document.getElementById("city-input");
const weatherInfo = document.getElementById("container");

getBtn.addEventListener("click", async () => {
  if (cityName.value.trim() === "") {
    alert("Please enter a city name.");
  } else {
    const data = await getWeather(cityName.value.trim());
    showWeather(data);
  }
});

async function getWeather(city) {
  try {
    const res = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    alert(`Something went wrong, please try again later`);
  }
}

async function showWeather(data) {
  weatherInfo.innerHTML = ` 
    <h2 id="location">${data.name || "N/A"}</h2>
    <p id="weather-main">Weather: ${data.weather && data.weather[0] ? data.weather[0].main : "N/A"}</p>
    <p id="main-temperature">Temperature: ${data.main.temp !== undefined ? data.main.temp + "°C" : "N/A"}</p>
    <img id="weather-icon" src="${data.weather && data.weather[0] ? data.weather[0].icon : ""}" + ${data.weather[0].main} alt="${data.weather && data.weather[0] ? data.weather[0].description : "weather icon"}">
    <p id="humidity">Humidity: ${data.main.humidity !== undefined ? data.main.humidity + "%" : "N/A"}</p>
    <p id="feels-like">Feels Like: ${data.main.feels_like !== undefined ? data.main.feels_like + "°C" : "N/A"}</p>
    <p id="wind">Wind Speed: ${data.wind && data.wind.speed !== undefined ? data.wind.speed + " m/s" : "N/A"}</p>
    <p id="wind-gust">Wind Gust: ${data.wind && data.wind.gust !== undefined ? data.wind.gust + " m/s" : "N/A"}</p>
  `;
}
