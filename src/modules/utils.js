async function getIcon(icon) {
    const myIcon = await import(`../assets/WeatherIcons/${icon}.png`);
    return myIcon;
}

async function createCurrentWeatherIcon(iconText) {
    const icon = new Image();
    const iconResponse = await getIcon(iconText);
    icon.src = iconResponse.default;
    return icon;
}

export async function displayCurrentWeatherIcon(jsonData) {
    const iconWrapper = document.querySelector('.current-weather-icon-wrapper');
    iconWrapper.replaceChildren();

    const icon = await createCurrentWeatherIcon(jsonData.currentConditions.icon);
    iconWrapper.appendChild(icon);
}

export function displayCurrentConditions(jsonData) {
    const currentConditionsWrapper = document.querySelector('.current-conditions-wrapper');
    currentConditionsWrapper.replaceChildren();

    const currentTemp = jsonData.currentConditions.temp;
    const currentPrecipitation = jsonData.currentConditions.precip;
    const currentHumidity = jsonData.currentConditions.humidity;
    const currentWind = jsonData.currentConditions.windspeed; 

    const weatherText = document.createElement('div');
    const weatherUnits = document.createElement('div');
    const fahrenheit = document.createElement('div');
    const celsius = document.createElement('div');
    const fahrenheitLink = document.createElement('a');
    const celsiusLink = document.createElement('a');
    const currentOtherConditionsWrapper = document.createElement('div');
    const precipitationText = document.createElement('p');
    const humidityText = document.createElement('p');
    const windText = document.createElement('p');

    weatherText.className = 'current-temperature flex';
    weatherUnits.className = 'weather-units flex';
    fahrenheit.className = 'fahrenheit';
    celsius.className = 'celsius';
    fahrenheitLink.className = 'fahrenheit-link';
    celsiusLink.className = 'celsius-link';
    currentOtherConditionsWrapper.className =
        'current-other-conditions-wrapper col';
    precipitationText.className = 'current-precipitation';
    humidityText.className = 'current-humidity';
    windText.className = 'current-wind';

    fahrenheitLink.textContent = 'F°';
    celsiusLink.textContent = 'C°';
    weatherText.textContent = Math.ceil(currentTemp);
    precipitationText.textContent = `Precipitation: ${currentPrecipitation}%`;
    humidityText.textContent = `Humidity: ${currentHumidity}%`;
    windText.textContent = `Wind: ${currentWind} mph`;

    fahrenheitLink.href = '#';
    celsiusLink.href = '#';

    fahrenheit.appendChild(fahrenheitLink);
    celsius.appendChild(celsiusLink);
    weatherUnits.append(fahrenheit, celsius);
    weatherText.appendChild(weatherUnits);
    currentOtherConditionsWrapper.append(
        precipitationText,
        humidityText,
        windText,
    );
    currentConditionsWrapper.append(weatherText, currentOtherConditionsWrapper);
}

export function displayCurrentDescriptions(jsonData) {
    const currentDescriptionsWrapper = document.querySelector(
        '.current-descriptions-wrapper',
    );
    currentDescriptionsWrapper.replaceChildren();

    const currentLocation = jsonData.resolvedAddress;
    const currentTime = convertToStandardTime(
        jsonData.currentConditions.datetime
    );
    const currentShortDescription = jsonData.currentConditions.conditions;
    const currentTimeEpoch = jsonData.currentConditions.datetimeEpoch * 1000;
    const currentTimeZoneOffset = jsonData.tzoffset * 3600000;
    const currentWeekday = getWeekDay(currentTimeEpoch + currentTimeZoneOffset); // convert timezone offset to ms and times 100

    const currentLocationElem = document.createElement('div');
    const currentDateElem = document.createElement('div');
    const currentShortDescriptionsElem = document.createElement('div');

    currentLocationElem.className = 'current-location';
    currentDateElem.className = '';
    currentShortDescriptionsElem.className = '';

    currentLocationElem.textContent = `${currentLocation}`;
    currentDateElem.textContent = `${currentWeekday} ${currentTime}`;
    currentShortDescriptionsElem.textContent = `${currentShortDescription}`;

    currentDescriptionsWrapper.append(
        currentLocationElem,
        currentDateElem,
        currentShortDescriptionsElem,
    );
}

function getWeekDay(time) {
    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const today = new Date(time).getUTCDay();
    return dayNames[today]
}

function convertToStandardTime(time) {
    const [hour, min] = time.split(':');

    if (Number(hour) < 12 && Number(hour) != 0) {
        return `${hour}:${min} AM`;
      } else if (Number(hour) >= 13) {
        return `${Number(hour) - 12}:${min} PM`;
      } else if (Number(hour) === 12) {
        return `${Number(hour)}:${min} PM`;
      } else {
        return `${Number(hour) + 12}:${min} AM`;
      }
}

export async function displayDayForecast(jsonData) {
    const bottom = document.querySelector('.bottom');
    bottom.replaceChildren();

    const forecast = await jsonData.days.slice(0, 8);

    forecast.forEach(async (dayForecast, i) => {
        const dayWrapper = document.createElement('div');
        const dayText = document.createElement('div');
        const dayIconWrapper = document.createElement('div');
        const dayTemperature = document.createElement('div');
        const dayTemperatureLow = document.createElement('p');
        const dayTemperatureHigh = document.createElement('p');
        const dayIcon = await createCurrentWeatherIcon(dayForecast.icon);
        const weekDay = await getWeekDay(dayForecast.datetime);

        dayWrapper.dataset.day = i;
        dayWrapper.className = 'day-wrapper col';
        dayText.className = 'day-text';
        dayIconWrapper.className = 'day-icon-wrapper';
        dayTemperature.className = 'day-temperature flex';

        dayText.textContent = `${weekDay}`;
        dayTemperatureLow.textContent = await `${Math.ceil(dayForecast.tempmin)}°`;
        dayTemperatureHigh.textContent = await `${Math.ceil(dayForecast.tempmax)}°`;

        dayIconWrapper.appendChild(dayIcon);
        dayTemperature.append(dayTemperatureLow, dayTemperatureHigh);
        dayWrapper.append(dayText, dayIconWrapper, dayTemperature);
        bottom.append(dayWrapper);
    });
}

export function displayForecastConditions(jsonData, forecastDay) {
    const currentConditionsWrapper = document.querySelector(
      '.current-conditions-wrapper',
    );
    currentConditionsWrapper.replaceChildren(); // Clear previous content
  
    const currentTemp = jsonData.days[forecastDay].temp;
    const currentPrecipitation = jsonData.days[forecastDay].precip;
    const currentHumidity = jsonData.days[forecastDay].humidity;
    const currentWind = jsonData.days[forecastDay].windspeed;
  
    const weatherText = document.createElement('div');
    const weatherUnits = document.createElement('div');
    const fahrenheit = document.createElement('div');
    const celsius = document.createElement('div');
    const fahrenheitLink = document.createElement('a');
    const celsiusLink = document.createElement('a');
    const currentOtherConditionsWrapper = document.createElement('div');
    const precipitationText = document.createElement('p');
    const humidityText = document.createElement('p');
    const windText = document.createElement('p');
  
    weatherText.className = 'current-temperature flex';
    weatherUnits.className = 'weather-units flex';
    fahrenheit.className = 'fahrenheit';
    celsius.className = 'celsius';
    fahrenheitLink.className = 'fahrenheit-link';
    celsiusLink.className = 'celsius-link';
    currentOtherConditionsWrapper.className =
      'current-other-conditions-wrapper col';
    precipitationText.className = 'current-precipitation';
    humidityText.className = 'current-humidity';
    windText.className = 'current-wind';
  
    fahrenheitLink.textContent = 'F°';
    celsiusLink.textContent = 'C°';
    weatherText.textContent = Math.ceil(currentTemp);
    precipitationText.textContent = `Precipitation: ${currentPrecipitation}%`;
    humidityText.textContent = `Humidity: ${currentHumidity}%`;
    windText.textContent = `Wind: ${currentWind} mph`;
  
    fahrenheitLink.href = '#';
    celsiusLink.href = '#';
  
    fahrenheit.appendChild(fahrenheitLink);
    celsius.appendChild(celsiusLink);
    weatherUnits.append(fahrenheit, celsius);
    weatherText.appendChild(weatherUnits);
    currentOtherConditionsWrapper.append(
      precipitationText,
      humidityText,
      windText,
    );
    currentConditionsWrapper.append(weatherText, currentOtherConditionsWrapper);
  }

  export function displayForecastDescriptions(jsonData, forecastDay) {
    const currentDescriptionsWrapper = document.querySelector(
      '.current-descriptions-wrapper',
    );
    currentDescriptionsWrapper.replaceChildren();
  
    const currentLocation = jsonData.resolvedAddress;
  
    const currentShortDescription = jsonData.days[forecastDay].conditions;
    const currentTimeEpoch = jsonData.days[forecastDay].datetime;
    const currentWeekday = getWeekDay(currentTimeEpoch);
    const currentLocationElem = document.createElement('div');
    const currentDateElem = document.createElement('div');
    const currentShortDescriptionsElem = document.createElement('div');
  
    currentLocationElem.className = 'current-location';
    currentDateElem.className = '';
    currentShortDescriptionsElem.className = '';
  
    currentLocationElem.textContent = `${currentLocation}`;
    currentDateElem.textContent = `${currentWeekday}`;
    currentShortDescriptionsElem.textContent = `${currentShortDescription}`;
  
    currentDescriptionsWrapper.append(
      currentLocationElem,
      currentDateElem,
      currentShortDescriptionsElem,
    );
  }

  export default {
    displayCurrentWeatherIcon,
    displayCurrentConditions,
    displayCurrentDescriptions,
    displayDayForecast,
    displayForecastConditions,
    displayForecastDescriptions,
  };