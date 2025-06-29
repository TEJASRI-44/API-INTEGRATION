const apiKey = "0fe998d2f89e36615d7fd022e814640f"; // Your API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      result.innerHTML = "City not found. Please try again.";
      return;
    }

    const data = await response.json();

    result.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>🌥️ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    result.innerHTML = "An error occurred while fetching weather data.";
    console.error(error);
  }
}
