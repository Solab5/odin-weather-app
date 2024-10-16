import { getWeatherRequest, processWeatherRequest } from "./api.js";
import {
    displayCurrentWeatherIcon,
    displayCurrentConditions,
    displayCurrentDescriptions,
    displayDayForecast,
    displayForecastConditions,
    displayForecastDescriptions
} from './utils.js';

function render() {
    const searchForm = document.querySelector('.search-form');
    const bottomContent = document.querySelector('.bottom');
    searchForm.addEventListener('submit', handleSearch);
    bottomContent.addEventListener('click', handleClickBottomContent);
}

async function handleSearch(event) {
    event.preventDefault();
    const location = event.target[0].value

    const data = await processWeatherRequest(getWeatherRequest(location));

    if (data) {
        displayCurrentWeatherIcon(data);
        displayCurrentConditions(data);
        displayCurrentDescriptions(data);
        displayDayForecast(data);
        event.target[0].value = '';
        return;
    }

    alert('please enter a valid location');
}

async function handleClickBottomContent(event) {
    if (!event.target.matches('.bottom')) {
        const targetForecast = event.target.closest('.day-wrapper').dataset.day;
        const location = document.querySelector('.current-location').textContent;
        const data = await processWeatherRequest(getWeatherRequest(location));
        displayForecastConditions(data, targetForecast);
        displayForecastDescriptions(data, targetForecast)
    }
}

export default render;