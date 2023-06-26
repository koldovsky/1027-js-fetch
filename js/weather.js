const url = "https://api.openweathermap.org/data/3.0/onecall?lat=49.842957&lon=24.031111&units=metric&appid=";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const temperatureInCelsius = data.current.temp;
        document.querySelector('.temp').innerText = temperatureInCelsius;
    })
    .catch(error => console.error('Error:', error));
