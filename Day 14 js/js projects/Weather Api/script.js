


let search_btn = document.getElementById('search_btn');


search_btn.addEventListener('click',async function(e) {
    e.preventDefault();
    let input_city = document.getElementById('input_city').value;
    let apikey= 'ede040e4619f741666cb4b0aac25ad29';
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${input_city}&appid=${apikey}`;
    let api = await fetch(apiurl);
    let respnse = await api.text();
    let data = await JSON.parse(respnse);
    console.log(data.main.temp);
    update_weather(data);
    console.log(data);

    
    
})

function update_weather(data){
    let city_name = document.getElementById('city');
    let temprature = document.getElementById('temp');
    let humiDity = document.getElementById('humidity');
    let windSpeed = document.getElementById('wind');
    let img = document.getElementById('img_weather');
    city_name.innerText = data.name;
    temprature.innerText = data.main.temp + '°C';
    humiDity.innerText = data.main.humidity + '%';
    windSpeed.innerText = data.wind.speed + ' km/h';

    if(data.weather[0].main === 'clear'){
        img.innerHTML = `src = 'images/cloudy.png'`;
    }
    else  if(data.weather[0].main === 'clouds'){
        img.innerHTML = `src = 'images/cloudy.png'`;
    }
    else  if(data.weather[0].main === 'rain'){
        img.innerHTML = `src = 'images/rain.png'`;
    }
    else{
        img.innerHTML = `src = 'images/cloudy.png'`;
    }

    
}














// async function checkWeather() {
//     let response = await fetch(apiurl = `&appid = ${apikey}`);
//     let data = await response.json();
//     console.log(data);
// }
// checkWeather();
