export const getWeatherData = async function (location) {
    const api = "L9W26DUBQRSKNQMD9EZ9EMUJN";
    let request = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${api}`;
    try {
        let response = await fetch(request);
        if (!response.ok) throw new Error('Network response was not ok');
        let json = await response.json();
        const weatherInfo = processWeatherData(json); // New function call
        console.log(weatherInfo); // Log the processed weather data
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
}

// New function to process the JSON data
const processWeatherData = function(data) {
    return {
        temperature: data.currentConditions.temp,
        condition: data.currentConditions.conditions,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed
    };
}

export const displayWeatherData = function(){
    const dataInput = document.querySelector('#location');
    const button = document.querySelector("#weather-button");

    button.addEventListener("click", function(event){
        event.preventDefault();
        getWeatherData(dataInput.value);
    });
}

