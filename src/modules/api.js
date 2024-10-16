async function getWeatherRequest(location) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=L9W26DUBQRSKNQMD9EZ9EMUJN`
        );
        if (response.ok) {
            return response.json();
        }
    } catch (err) {
        console.error(err);
    }
}

async function processWeatherRequest(response) {
    const myPromise = new Promise((resolve) => resolve(response));
    try {
        const data = await myPromise;
        return data;
    } catch (err) {
        console.log(err);
    }
}

export {getWeatherRequest, processWeatherRequest };