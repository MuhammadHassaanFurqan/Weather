 fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ 6a4f0a20177f8f8628c04e4e92de265c}')
function ser (){
    const apiKey = '6a4f0a20177f8f8628c04e4e92de265c';
    const city = document.getElementById('search');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => console.error('Error fetching data:', error));
    }