function getInput() {
    let cityName = document.querySelector("#input").value;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=79407614135f4330b91132311212010&q=${cityName}&days=1&aqi=no&alerts=yes`;
    getApi(url);
};

function getApi(url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                let data = response.json();
                return data
            }
            else {
                console.log("Response was not ok", response);
            };

        })
        .then((data) => {
            showData(data)
        });
};

function showData(data) {
    let display = `<div id="info-type">
                    <h3>City Name</h3>
                    <h3>Region</h3>
                    <h3>Country</h3>
                    <h3>Condition</h3>
                    <h3>Max Temperature in Celsius</h3>
                    <h3>Min temperature in Celsius</h3>
                    </div>`

    display = `<div id="info-type">
                <h3>City Name</h3>
                <h3>Region</h3>
                <h3>Country</h3>
                <h3>Condition</h3>
                <h3>Max Temperature</h3>
                <h3>Min temperature</h3>
                </div>
                <div id="show-info">
                <p>${data.location.name}</p>
                <p>${data.location.region}</p>
                <p>${data.location.country}</p>
                <p>${data.current.condition.text}</p>
                <p>${data.forecast.forecastday[0].day.maxtemp_c}°C</p>
                <p>${data.forecast.forecastday[0].day.mintemp_c}°C</p>
                </div>`

    document.getElementById("city-info").innerHTML = display;

}

const button = document.querySelector("#city-button");

button.addEventListener("click", getInput);


