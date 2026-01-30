 const apiKey = "63408fa0df13a1050a2a3ddab562c9e2";

    function getWeather() {
      const city = document.getElementById("city").value.trim();
      const result = document.getElementById("result");
      const error = document.getElementById("error");

      result.innerHTML = "";
      error.innerHTML = "";

      if (!city) {
        error.innerHTML = "Please enter a city name";
        return;
      }

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          if (data.cod !== 200) {
            error.innerHTML = "City not found";
            return;
          }

          result.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <p>${data.weather[0].description.toUpperCase()}</p>
            <p>🌡 ${data.main.temp}°C</p>
            <p>💧 ${data.main.humidity}%</p>
            <p>🌬 ${data.wind.speed} m/s</p>
          `;
        })
        .catch(() => {
          error.innerHTML = "Network error";
        });
    }