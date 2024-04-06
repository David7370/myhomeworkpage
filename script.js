async function fetchWeather() {
  const cityName = document.getElementById('cityInput').value;
  const weatherInfo = document.getElementById('weatherInfo');

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=98ec0a8424454c1ebf384611240604&q=${cityName}&days=1&aqi=no&alerts=no`);
    console.log('Response:', response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data:', data);

    const currentWeather = data.current;
    const weatherCondition = currentWeather.condition.text.toLowerCase();

    const maxTemp = data.forecast.forecastday[0].day.maxtemp_c;
    const minTemp = data.forecast.forecastday[0].day.mintemp_c;
    const humidity = currentWeather.humidity;
    const cloudiness = currentWeather.cloud;
    const hourlyForecast = data.forecast.forecastday[0].hour;

    let backgroundImage;
    switch (weatherCondition) {
      case 'sunny':
        backgroundImage = 'url(https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        break;
      case 'cloudy':
        backgroundImage = 'url(https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        break;
      case 'rainy':
        backgroundImage = 'url(https://images.pexels.com/photos/832521/pexels-photo-832521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        break;
      case 'partly cloudy':
        backgroundImage = 'url(https://images.pexels.com/photos/4691043/pexels-photo-4691043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        break;
      case 'overcast':
        backgroundImage = 'url(https://images.pexels.com/photos/3742711/pexels-photo-3742711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        break;
      case 'clear':
        backgroundImage = 'url(https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        break;
      case 'snow':
        backgroundImage = 'url(https://images.pexels.com/photos/773953/pexels-photo-773953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        break;
      case 'Light snow showers':
        backgroundImage = 'url(https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg)';
        break;
      default:
        backgroundImage = 'url(default-background.jpg)';
    }

    weatherInfo.style.backgroundImage = backgroundImage;

    let weatherData = `
      <p>Location: ${data.location.name}, ${data.location.country}</p>
      <p>Current Temperature: ${currentWeather.temp_c}°C</p>
      <p>Condition: ${currentWeather.condition.text}</p>
      <p>Maximum Temperature: ${maxTemp}°C</p>
      <p>Minimum Temperature: ${minTemp}°C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Cloudiness: ${cloudiness}%</p>
      <h2>Hourly Forecast</h2>
    `;

    hourlyForecast.forEach(hour => {
      const time = new Date(hour.time_epoch * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      weatherData += `<p>${time}: ${hour.condition.text}</p>`;
    });

    weatherInfo.innerHTML = weatherData;
  } catch (error) {
    console.error('There was a problem fetching the weather data:', error);
    weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
  }
}