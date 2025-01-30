export class Weather {
  static #API_KEY = 'cf527cf2c7dbc5a5c56ee6e92551c787';
  static #latitude = '34.05190227968152';
  static #longitude = '-118.33213877275458';
  static #BASE_URL = 'https://api.openweathermap.org/data/2.5';

  static async getCurrentDay() {
    const URL = `${this.#BASE_URL}/weather?lat=${this.#latitude}&lon=${this.#longitude}&appid=${this.#API_KEY}&units=imperial`;
    const response = await fetch(URL);
    const data = await response.json();

    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      high: data.main.temp_max,
      low: data.main.temp_min,
      humidity: data.main.humidity,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    };
  }

  static async getForecast() {
    const URL = `${this.#BASE_URL}/forecast?lat=${this.#latitude}&lon=${this.#longitude}&appid=${this.#API_KEY}&units=imperial`;
    const response = await fetch(URL);
    const data = await response.json();

    return data.list
      .map((item) => {
        const date = new Date(item.dt * 1000);
        return {
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          temperature: item.main.temp,
        };
      })
      .filter((item, index, self) => {
        return index === self.findIndex((t) => t.day === item.day);
      })
      .slice(1, 8);
  }
}
