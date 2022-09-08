const API_URL = 'https://api.openweathermap.org/data/2.5';

const API_KEY = 'a6b249aa4f898ea5d9b03c5fea4b2798';

const IMG_URL = 'http://openweathermap.org/img/wn';

function getCurrentWeatherApi(city) {
  return `${API_URL}/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastWeatherApi(city) {
  return `${API_URL}/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
