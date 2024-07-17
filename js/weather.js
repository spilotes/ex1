const apiKey = "7231816e78d0a11eeef9ee8cd7aca011";
const cidade = "Florianópolis";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const temperatura = data.main.temp;
    const temperaturaElement = document.getElementById("temperatura");
    temperaturaElement.innerHTML = `${cidade}, ${temperatura}°C`;
  })
  .catch((error) => console.error(error));
