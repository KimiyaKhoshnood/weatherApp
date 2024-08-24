let weather = async () => {
  function search() {
    console.log("clicked");
    
    let city = document.querySelector(".weatherSearch>input").value;
    axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f6311eb8574b1a4480941f280c1f593`
    ).then((res) => {
        document.querySelector("#weatherInfo").classList.remove("notActive");
        document.querySelector("#weatherInfo").classList.add("active");
        document.querySelector("#cityName").innerHTML = city.toUpperCase()
        document.querySelector("#degree").innerHTML = `${
          Math.floor(res.data.main.temp) - 273
    } <span>°C</span>`;
        document.querySelector("#aboutWeather").innerHTML =
          res.data.weather[0].description;
        document.querySelector("#humidity").innerHTML =
          res.data.main.humidity + "%";
        document.querySelector("#windSpeed").innerHTML = res.data.wind.speed;
    }).catch((error) => {
        document.querySelector("#snackbar").className = "show"
        setTimeout(function(){ document.querySelector("#snackbar").className = document.querySelector("#snackbar").className.replace("show", ""); }, 3000);
    });
  }

  document.querySelector("#search").addEventListener("keypress", (event) => {
    search()
  });
  document.querySelector("#search").addEventListener("click", () => {
    search()
  });
  
};
weather();
