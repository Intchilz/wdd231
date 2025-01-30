import { Layout } from '../components/Layout.js';
import { Box } from '../components/Box.js';
import { Members } from '../fetchers/members.js';
import { Weather } from '../fetchers/weather.js';
import { Member } from '../components/Member.js';
import { suffleDataAndGetMax } from '../utils/suffle-data-and-get-max.js';

async function render() {
  const members = await Members.get();
  const suffledMembers = suffleDataAndGetMax({ data: members, maxItems: 3 });
  const weather = await Weather.getCurrentDay();
  const forecast = await Weather.getForecast();

  document.getElementById('root').innerHTML = Layout({
    children: `
    <main class="main" id="main">
      <h1>Home</h1>
      <div class="flex-container">
        ${Box(
          {
            title: 'Events',
            body: '',
          },
          { classToAdd: 'flex:grow' },
        )}
        ${Box({
          title: 'Current Weather',
          imageSrc: `https://openweathermap.org/img/wn/${weather.icon}.png`,
          body: `
            <div class="d:flex">
              <p class="line:height:large"><span class="font:bold">${weather.temperature}°</span>F</p>
              <p class="line:height:large">${weather.description}</p>
              <p class="line:height:large">High: ${weather.high}°</p>
              <p class="line:height:large">Low: ${weather.low}°</p>
              <p class="line:height:large">Humidity: ${weather.humidity}%</p>
              <p class="line:height:large">Sunrise: ${weather.sunrise}</p>
              <p class="line:height:large">Sunset: ${weather.sunset}</p>
            </div>
          `,
        })}
        ${Box({
          title: 'Weather Forecast',
          body: `
            <div class="d:flex">
              ${forecast
                .map(
                  ({ day, temperature }) => `
                  <p class="line:height:large font:size:medium">${day}: <span class="font:bold">${temperature}°</span></p>
                `,
                )
                .join('')}
            </div>
          `,
        })}
      </div>
      <div class="grid-container">
        ${suffledMembers.map((member) => Member(member)).join('')}
      </div>
    </main>
  `,
  });
}

(async () => {
  await render();
})();
