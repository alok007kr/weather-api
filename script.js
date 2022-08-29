// Fetch the api data
function fetchApi(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ee6f584b017ec187e00e61abe42f9fa`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      document.getElementById("temp").innerHTML = data.main.temp;
      document.getElementById("weather").innerHTML = data.weather[0].description;
      document.getElementById("humid").innerHTML = data.main.humidity;
      document.getElementById("speed").innerHTML = data.wind.speed;

    })
    .catch((e) => {
      console.log(e);
    })
}


//fetch("https://api.openweathermap.org/data/2.5/weather?q=${}&appid=7ee6f584b017ec187e00e61abe42f9fa")

// .then((response) => {
//   return response.json();
// })
//  .then((data) => {
//    (console.log(data));
//  })
//  .catch((e) => {
//    console.log(e);
// });

// Here we ended the fetch section


// Get Weather Report
// Show Weather Report
// Data Manage

var city = document.getElementById("city");
var search = document.getElementById("search");

search.addEventListener('click', () => {
  if (city.value != "") {
    fetchApi(city.value);
    document.getElementById("eCity").innerHTML = city.value;
  }
  else {
    alert("Enter the City");
  }
})
