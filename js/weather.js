function onGeoOk(position) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b657fcc07752e14226f21a098ecd279c&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = `${data.weather[0].main} / ${data.main.temp} ${data.name}`;
      document.querySelector("#weather span").innerText = weather;
      localStorage.setItem("weather", weather);
    });
}
if (localStorage.getItem("weather")) {
  document.querySelector("#weather span:first-child").innerText =
    localStorage.getItem("weather");
} else {
  navigator.geolocation.getCurrentPosition(onGeoOk, () =>
    alert("Can't find you. No weather for you.")
  );
}

const btn = document.querySelector("#weather button");
btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(onGeoOk, () => {
    document.querySelector("#weather span").innerText = "";
    localStorage.removeItem("weather");
    alert("Can't find you. No weather for you.");
  });
});
